import randomColor from 'randomcolor'

export interface Label {
  name: string
  color: string
}

export async function getLabelsFromOwners(
  owners: Set<string>
): Promise<Set<Label>> {
  const labels: Set<Label> = new Set([])
  var re = /@DataDog/gi; 
  for (const owner of owners) {
    var ddOwner = str.replace(re, "team")
    labels.add({
      name: `${ddOwner}`,
      // From the documentation: https://octokit.github.io/rest.js/#octokit-routes-issues-create-label
      // > The hexadecimal color code for the label, without the leading #
      // randomcolor() returns a color code with a '#' prefix, so we remove it
      color: randomColor().substr(1)
    })
  }
  return labels
}
