/**
 * « de » + nom de commune, avec élision et contraction :
 * Angers → « d'Angers », Les Ponts-de-Cé → « des Ponts-de-Cé »,
 * Le Lion-d'Angers → « du Lion-d'Angers », Saumur → « de Saumur ».
 */
export function deCommune(nom: string): string {
  if (nom.startsWith("Les ")) return `des ${nom.slice(4)}`;
  if (nom.startsWith("Le ")) return `du ${nom.slice(3)}`;
  if (/^[AEIOUÀÂÉÈÊÎÔÛ]/i.test(nom)) return `d'${nom}`;
  return `de ${nom}`;
}
