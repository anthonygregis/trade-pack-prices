
/**
 * Map of display name → substring to match against packName.
 * Selecting "Falcorth Plains" filters to packs whose name includes "Falcorth ".
 */
export const SPECIALTY_ZONE_OPTIONS: Record<string, string> = {
  'Ahnimar': 'Ahnimar ',
  'Airain Rock': 'Airain ',
  'Arcum Iris': 'Arcum Iris ',
  'Aubre Cradle': 'Aubre Cradle ',
  'Calmlands': 'Calmlands ',
  'Cinderstone Moor': 'Cinderstone ',
  'Dewstone Plains': 'Dewstone ',
  'Exeloch': 'Exeloch ',
  'Falcorth Plains': 'Falcorth ',
  'Golden Ruins': 'Golden Ruins ',
  'Gweonid Forest': 'Gweonid ',
  'Halcyona': 'Halcyona ',
  'Hasla': 'Hasla ',
  'Heedmar': 'Heedmar ',
  'Hellswamp': 'Hellswamp ',
  'Karkasse Ridgelands': 'Karkasse ',
  'Lilyut Hills': 'Lilyut ',
  'Mahadevi': 'Mahadevi ',
  'Marcala': 'Marcala ',
  'Marianople': 'Marianople ',
  'Nuimari': 'Nuimari ',
  'Perinoor Ruins': 'Perinoor ',
  'Rokhala Mountains': 'Rokhala ',
  'Rookborne Basin': 'Rookborne ',
  'Sanddeep': 'Sanddeep ',
  'Silent Forest': 'Silent Forest ',
  'Solis Headlands': 'Solis ',
  'Solzreed Peninsula': 'Solzreed ',
  'Sunbite Wilds': 'Sunbite ',
  'Sungold Fields': 'Sungold ',
  'Tigerspine Mountains': 'Tigerspine ',
  'Two Crowns': 'Two Crowns ',
  'Villanelle': 'Villanelle ',
  'Whalesong Harbor': 'Whalesong ',
  'White Arden': 'White Arden ',
  'Windscour Savannah': 'Windscour ',
  'Ynystere': 'Ynystere ',
};

export const DESTINATION_OPTIONS: string[] = [
  'Arcum Iris',
  'Calmlands',
  'Cinderstone Moor',
  'Dewstone Plains',
  'Diamond Shores',
  'Exeloch',
  'Falcorth Plains',
  'Freedich Island',
  'Golden Ruins',
  'Gweonid Forest',
  'Heedmar',
  'Mahadevi',
  'Marcala',
  'Marianople',
  'Nuimari',
  'Rookborne Basin',
  'Sanddeep',
  'Solis Headlands',
  'Solzreed Peninsula',
  'Sungold Fields',
  'Two Crowns',
  'Villanelle',
  'Ynystere',
];

export const SPECIALTY_ZONE_CONTINENTS: Record<string, string[]> = {
  Haranya: [
    'Ahnimar', 'Arcum Iris', 'Falcorth Plains', 'Hasla', 'Mahadevi',
    'Perinoor Ruins', 'Rokhala Mountains', 'Rookborne Basin', 'Silent Forest',
    'Solis Headlands', 'Sunbite Wilds', 'Tigerspine Mountains', 'Villanelle',
    'Windscour Savannah', 'Ynystere',
  ],
  Nuia: [
    'Airain Rock', 'Aubre Cradle', 'Cinderstone Moor', 'Dewstone Plains',
    'Gweonid Forest', 'Halcyona', 'Hellswamp', 'Karkasse Ridgelands',
    'Lilyut Hills', 'Marianople', 'Sanddeep', 'Solzreed Peninsula',
    'Two Crowns', 'White Arden',
  ],
  Auroria: [
    'Calmlands', 'Exeloch', 'Golden Ruins', 'Heedmar', 'Marcala',
    'Nuimari', 'Sungold Fields', 'Whalesong Harbor',
  ],
};

export const DESTINATION_CONTINENTS: Record<string, string[]> = {
  Haranya: [
    'Arcum Iris', 'Falcorth Plains', 'Mahadevi', 'Rookborne Basin',
    'Solis Headlands', 'Villanelle', 'Ynystere',
  ],
  Nuia: [
    'Cinderstone Moor', 'Dewstone Plains', 'Gweonid Forest', 'Marianople',
    'Sanddeep', 'Solzreed Peninsula', 'Two Crowns',
  ],
  Auroria: [
    'Calmlands', 'Diamond Shores', 'Exeloch', 'Golden Ruins', 'Heedmar',
    'Marcala', 'Nuimari', 'Sungold Fields',
  ],
};

export const REWARD_OPTIONS: string[] = [
  'Charcoal Stabilizer',
  'Dragon Essence Stabilizer',
  'Gilda Star',
  'Gold',
  "Lord's Pence",
];

export const SITE_NAME = 'ArcheAge Classic Tools';
export const SITE_DESCRIPTION = 'Community tools for ArcheAge Classic private servers';

