const categoryData = [
  {
    name: 'Altbier',
    id: 1,
  },
  {
    name: 'Alternative Grain Beer',
    id: 2,
  },
  {
    name: 'Alternative Sugar Beer',
    id: 3,
  },
  {
    name: 'American Amber Ale',
    id: 4,
  },
  {
    name: 'American Barleywine',
    id: 5,
  },
  {
    name: 'American Brown Ale',
    id: 6,
  },
  {
    name: 'American IPA',
    id: 7,
  },
  {
    name: 'American Lager',
    id: 8,
  },
  {
    name: 'American Light Lager',
    id: 9,
  },
  {
    name: 'American Pale Ale',
    id: 10,
  },
  {
    name: 'American Porter',
    id: 11,
  },
  {
    name: 'American Stout',
    id: 12,
  },
  {
    name: 'American Strong Ale',
    id: 13,
  },
  {
    name: 'American Wheat Beer',
    id: 14,
  },
  {
    name: 'American Wheat or Rye Beer',
    id: 15,
  },
  {
    name: 'Apple Wine',
    id: 16,
  },
  {
    name: 'Australian Sparkling Ale',
    id: 17,
  },
  {
    name: 'Autumn Seasonal Beer',
    id: 18,
  },
  {
    name: 'Baltic Porter',
    id: 19,
  },
  {
    name: 'Belgian Blond Ale',
    id: 20,
  },
  {
    name: 'Belgian Dark Strong Ale',
    id: 21,
  },
  {
    name: 'Belgian Dubbel',
    id: 22,
  },
  {
    name: 'Belgian Golden Strong Ale',
    id: 23,
  },
  {
    name: 'Belgian Pale Ale',
    id: 24,
  },
  {
    name: 'Belgian Specialty Ale',
    id: 25,
  },
  {
    name: 'Belgian Tripel',
    id: 26,
  },
  {
    name: 'Berliner Weisse',
    id: 27,
  },
  {
    name: 'Best Bitter',
    id: 28,
  },
  {
    name: 'Bi�re de Garde',
    id: 29,
  },
  {
    name: 'Blonde Ale',
    id: 30,
  },
  {
    name: 'Bohemian Pilsener',
    id: 31,
  },
  {
    name: 'Braggot',
    id: 32,
  },
  {
    name: 'Brett Beer',
    id: 33,
  },
  {
    name: 'British Brown Ale',
    id: 34,
  },
  {
    name: 'British Golden Ale',
    id: 35,
  },
  {
    name: 'British Strong Ale',
    id: 36,
  },
  {
    name: 'Brown Porter',
    id: 37,
  },
  {
    name: 'California Common',
    id: 38,
  },
  {
    name: 'California Common Beer',
    id: 39,
  },
  {
    name: 'Classic American Pilsner',
    id: 40,
  },
  {
    name: 'Classic Rauchbier',
    id: 41,
  },
  {
    name: 'Classic name Smoked Beer',
    id: 42,
  },
  {
    name: 'Clone Beer',
    id: 43,
  },
  {
    name: 'Common Cider',
    id: 44,
  },
  {
    name: 'Cream Ale',
    id: 45,
  },
  {
    name: 'Cyser (Apple Melomel)',
    id: 46,
  },
  {
    name: 'Czech Amber Lager',
    id: 47,
  },
  {
    name: 'Czech Dark Lager',
    id: 48,
  },
  {
    name: 'Czech Pale Lager',
    id: 49,
  },
  {
    name: 'Czech Premium Pale Lager',
    id: 50,
  },
  {
    name: 'Dusseldorf Altbier',
    id: 51,
  },
  {
    name: 'Dark American Lager',
    id: 52,
  },
  {
    name: 'Dark Mild',
    id: 53,
  },
  {
    name: 'Doppelbock',
    id: 54,
  },
  {
    name: 'Dortmunder Export',
    id: 55,
  },
  {
    name: 'Double IPA',
    id: 56,
  },
  {
    name: 'Dry Mead',
    id: 57,
  },
  {
    name: 'Dry Stout',
    id: 58,
  },
  {
    name: 'Dunkelweizen',
    id: 59,
  },
  {
    name: 'Dunkles Bock',
    id: 60,
  },
  {
    name: 'Dunkles Weissbier',
    id: 61,
  },
  {
    name: 'Eisbock',
    id: 62,
  },
  {
    name: 'English Barleywine',
    id: 63,
  },
  {
    name: 'English Cider',
    id: 64,
  },
  {
    name: 'English IPA',
    id: 65,
  },
  {
    name: 'English Porter',
    id: 66,
  },
  {
    name: 'Experimental Beer',
    id: 67,
  },
  {
    name: 'Extra Special/Strong Bitter (ESB)',
    id: 68,
  },
  {
    name: 'Festbier',
    id: 69,
  },
  {
    name: 'Flanders Brown Ale/Oud Bruin',
    id: 70,
  },
  {
    name: 'Flanders Red Ale',
    id: 71,
  },
  {
    name: 'Foreign Extra Stout',
    id: 72,
  },
  {
    name: 'French Cider',
    id: 73,
  },
  {
    name: 'Fruit and Spice Beer',
    id: 74,
  },
  {
    name: 'Fruit Beer',
    id: 75,
  },
  {
    name: 'Fruit Cider',
    id: 76,
  },
  {
    name: 'Fruit Lambic',
    id: 77,
  },
  {
    name: 'German Helles Exportbier',
    id: 78,
  },
  {
    name: 'German Leichtbier',
    id: 79,
  },
  {
    name: 'German Pils',
    id: 80,
  },
  {
    name: 'German Pilsner (Pils)',
    id: 81,
  },
  {
    name: 'Gose',
    id: 82,
  },
  {
    name: 'Gueuze',
    id: 83,
  },
  {
    name: 'Helles Bock',
    id: 84,
  },
  {
    name: 'Holiday/Winter Special Spiced Beer',
    id: 85,
  },
  {
    name: 'Imperial IPA',
    id: 86,
  },
  {
    name: 'Imperial Stout',
    id: 87,
  },
  {
    name: 'International Amber Lager',
    id: 88,
  },
  {
    name: 'International Dark Lager',
    id: 89,
  },
  {
    name: 'International Pale Lager',
    id: 90,
  },
  {
    name: 'Irish Extra Stout',
    id: 91,
  },
  {
    name: 'Irish Red Ale',
    id: 92,
  },
  {
    name: 'Irish Stout',
    id: 93,
  },
  {
    name: 'K�lsch',
    id: 94,
  },
  {
    name: 'Kellerbier: Amber Kellerbier',
    id: 95,
  },
  {
    name: 'Kellerbier: Pale Kellerbier',
    id: 96,
  },
  {
    name: 'Kentucky Common',
    id: 97,
  },
  {
    name: 'Lambic',
    id: 98,
  },
  {
    name: 'Lichtenhainer',
    id: 99,
  },
  {
    name: 'Light American Lager',
    id: 100,
  },
  {
    name: 'London Brown Ale',
    id: 101,
  },
  {
    name: 'M�rzen',
    id: 102,
  },
  {
    name: 'Maibock/Helles Bock',
    id: 103,
  },
  {
    name: 'Metheglin',
    id: 104,
  },
  {
    name: 'Mild',
    id: 105,
  },
  {
    name: 'Mixed-Fermentation Sour Beer',
    id: 106,
  },
  {
    name: 'Mixed-name Beer',
    id: 107,
  },
  {
    name: 'Munich Dunkel',
    id: 108,
  },
  {
    name: 'Munich Helles',
    id: 109,
  },
  {
    name: 'New England Cider',
    id: 110,
  },
  {
    name: 'N/A',
    id: 111,
  },
  {
    name: 'North German Altbier',
    id: 112,
  },
  {
    name: 'Northern English Brown',
    id: 113,
  },
  {
    name: 'Oatmeal Stout',
    id: 114,
  },
  {
    name: 'Oktoberfest/M�rzen',
    id: 115,
  },
  {
    name: 'Old Ale',
    id: 116,
  },
  {
    name: 'Open Category Mead',
    id: 117,
  },
  {
    name: 'Ordinary Bitter',
    id: 118,
  },
  {
    name: 'Other Fruit Melomel',
    id: 119,
  },
  {
    name: 'Other Smoked Beer',
    id: 120,
  },
  {
    name: 'Other Specialty Cider or Perry',
    id: 121,
  },
  {
    name: 'Oud Bruin',
    id: 122,
  },
  {
    name: 'Piwo Grodziskie',
    id: 123,
  },
  {
    name: 'Premium American Lager',
    id: 124,
  },
  {
    name: 'Pre-Prohibition Lager',
    id: 125,
  },
  {
    name: 'Pre-Prohibition Porter',
    id: 126,
  },
  {
    name: 'Pyment (Grape Melomel)',
    id: 127,
  },
  {
    name: 'Rauchbier',
    id: 128,
  },
  {
    name: 'Robust Porter',
    id: 129,
  },
  {
    name: 'Roggenbier',
    id: 130,
  },
  {
    name: 'Roggenbier (German Rye Beer)',
    id: 131,
  },
  {
    name: 'Russian Imperial Stout',
    id: 132,
  },
  {
    name: 'Sahti',
    id: 133,
  },
  {
    name: 'Saison',
    id: 134,
  },
  {
    name: 'Schwarzbier',
    id: 135,
  },
  {
    name: 'Scottish Export',
    id: 136,
  },
  {
    name: 'Scottish Export 80/-',
    id: 137,
  },
  {
    name: 'Scottish Heavy',
    id: 138,
  },
  {
    name: 'Scottish Heavy 70/-',
    id: 139,
  },
  {
    name: 'Scottish Light',
    id: 140,
  },
  {
    name: 'Scottish Light 60/-',
    id: 141,
  },
  {
    name: 'Semi-Sweet Mead',
    id: 142,
  },
  {
    name: 'Southern English Brown',
    id: 143,
  },
  {
    name: 'Special/Best/Premium Bitter',
    id: 144,
  },
  {
    name: 'Specialty Beer',
    id: 145,
  },
  {
    name: 'Specialty Fruit Beer',
    id: 146,
  },
  {
    name: 'Specialty IPA: Belgian IPA',
    id: 147,
  },
  {
    name: 'Specialty IPA: Black IPA',
    id: 148,
  },
  {
    name: 'Specialty IPA: Brown IPA',
    id: 149,
  },
  {
    name: 'Specialty IPA: Red IPA',
    id: 150,
  },
  {
    name: 'Specialty IPA: Rye IPA',
    id: 151,
  },
  {
    name: 'Specialty IPA: White IPA',
    id: 152,
  },
  {
    name: 'Specialty Smoked Beer',
    id: 153,
  },
  {
    name: 'Specialty Wood-Aged Beer',
    id: 154,
  },
  {
    name: 'Spice  Herb  or Vegetable Beer',
    id: 155,
  },
  {
    name: 'Standard American Lager',
    id: 156,
  },
  {
    name: 'Standard/Ordinary Bitter',
    id: 157,
  },
  {
    name: 'Straight (Unblended) Lambic',
    id: 158,
  },
  {
    name: 'Strong Bitter',
    id: 159,
  },
  {
    name: 'Strong Scotch Ale',
    id: 160,
  },
  {
    name: 'Sweet Mead',
    id: 161,
  },
  {
    name: 'Sweet Stout',
    id: 162,
  },
  {
    name: 'Traditional Bock',
    id: 163,
  },
  {
    name: 'Traditional Perry',
    id: 164,
  },
  {
    name: 'Trappist Single',
    id: 165,
  },
  {
    name: 'Tropical Stout',
    id: 166,
  },
  {
    name: 'Vienna Lager',
    id: 167,
  },
  {
    name: 'Wee Heavy',
    id: 168,
  },
  {
    name: 'Weissbier',
    id: 169,
  },
  {
    name: 'Weizen/Weissbier',
    id: 170,
  },
  {
    name: 'Weizenbock',
    id: 171,
  },
  {
    name: 'Wheatwine',
    id: 172,
  },
  {
    name: 'Wild Specialty Beer',
    id: 173,
  },
  {
    name: 'Winter Seasonal Beer',
    id: 174,
  },
  {
    name: 'Witbier',
    id: 175,
  },
  {
    name: 'Wood-Aged Beer',
    id: 176,
  },
];

export default categoryData;
