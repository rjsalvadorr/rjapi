const shuffle = require('lodash/shuffle');
const sample = require('lodash/sample');

const mocks = {
  /**
   * Returns a random race (fantasy characters)
   */
  getRandomFantasyRace: function() {
    const races = [
      'dwarf',
      'elf',
    ]

    return sample(races);
  },
  /**
   * Returns a random gender (fantasy characters)
   */
  getRandomFantasyGender: function() {
    const genders = [
      'male',
      'female',
      'neutral',
    ]

    return sample(genders);
  },
  /**
   * Returns a race-appropriate name
   */
  getRaceAppropriateName: function(raceName, gender) {
    let name = null;

    switch(raceName.toLowerCase()) {
      case 'dwarf':
        name = sample(this.getDwarfNames(gender))
        break;
      case 'elf':
        name = sample(this.getElfNames(gender))
        break;
      default:
        break;
    }

    return name;
  },
  /**
   * Returns a URL for a random 120x120 display pic
   */
  getRandomDisplayPicUrl: function(baseUrl) {
    const earls = [
      '/images/display-pic-1.jpg',
      '/images/display-pic-2.jpg',
      '/images/display-pic-3.jpg',
      '/images/display-pic-4.jpg',
      '/images/display-pic-5.jpg',
      '/images/display-pic-6.jpg',
    ]

    return `${baseUrl}${sample(earls)}`;
  },
  /**
   * Returns a list of up to 40 dwarf names
   * If gender is unspecified, return female names
   */
  getDwarfNames: function(gender) {
    const maleNames = [
      'Jasdrus Ashgrip',
      'Vother Axesunder',
      'Doukomi Jadebelt',
      'Reirgonlir Hillheart',
      'Rukhorlig Iceminer',
      'Nastrur Forgemace',
      'Odem Metalhand',
      'Oridgrouk Treasurebow',
      'Thabaeth Goldspine',
      'Kokreack Platebuckle',
      'Dalomet Coalmaster',
      'Thutouth Cavecloak',
      'Thanamli Stronghide',
      'Jararlig Duskbelt',
      'Lurnas Windfoot',
      'Nurakdroc Rubyflayer',
      'Grudmuid Bristledigger',
      'Luzzouck Icebelly',
      'Bhazumir Stormpike',
      'Thatdrolin Treasurethane',
    ];
    
    const femaleNames = [
      'Handrealin Flattoe',
      'Torezuna Grimpike',
      'Lurhare Drakechin',
      'Reidweaserd Onyxmail',
      'Gozegaer Snowguard',
      'Valmuhilda Chaoshood',
      'Thaveatalyn Barbedbraids',
      'Thikhelyn Grimmaker',
      'Dhomrearika Boulderhelm',
      'Thrarsaserd Sapphirecoat',
      'Bramwotalyn Heavyhead',
      'Bamnolyn Coalflayer',
      'Mumdaelda Longstone',
      'Hakwugith Dimmace',
      'Yatgraelynn Honorcloak',
      'Grouzzaerika Blazinghide',
      'Delgeabo Coinbelt',
      'Gakeaserd Cragflayer',
      'Vodwouhilda Lighthead',
      'Oriweanelyn Emberjaw',
    ];

    if(!gender) {
      return shuffle(maleNames.concat(femaleNames));
    }

    if(gender === 'male') {
      return shuffle(maleNames);
    } else {
      return shuffle(femaleNames);
    }
  },
  /**
   * Returns a list of 60 elf names
   */
  getElfNames: function(gender) {
    const maleNames = [
      'Mlartlar Trisvyre',
      'Braern Valxina',
      'Faeranduil Valven',
      'Glorandal Keaqen',
      'Khatar Cravyre',
      'Rychell Mortris',
      'Marlevaur Shapetor',
      'Hagre Genmaer',
      'Phaendar Jolar',
      'Delsaran Daethyra',
      'Nueleth Yesthana',
      'Elidyr Genvaris',
      'Aymer Trissalor',
      'Goren Oloro',
      'Filverel Waesquinal',
      'Lathlaeril Greyra',
      'Elauthin Thestina',
      'Alais Bifir',
      'Jandar Xilzumin',
      'Inchel Olonan',
      'Nanthaliene Magzumin',
    ];
    
    const femaleNames = [
      'Taeral Xyrnan',
      'Aien Caikrana',
      'Jorildyn Adthana',
      'Kymil Brylee',
      'Nasir Fagella',
      'Narbeth Chaehana',
      'Vamir Petwynn',
      'Rhalyf Faefir',
      'Saevel Dordithas',
      'Lura Gilhorn',
      'Ava Tramaer',
      'Yaereene Yeljor',
      'Aila Kellen',
      'Shalaevar Fathana',
      'Halanaestra Zinlar',
      'Nithroel Grena',
      'Bellaluna Jofina',
      'Arryn Balcaryn',
      'Tanulia Ianjyre',
    ];

    const neutralNames = [
      'Garynnon Faejeon',
      'Aerendyl Gilqen',
      'Ilphas Norvalur',
      'Sylvar Jogolor',
      'Evindal Orinan',
      'Folmer Morsandoral',
      'Darfin Dafiel',
      'Sinaht Naevaris',
      'Iyrandrar Ianfir',
      'Ayluin Trisfir',
      'Ellarian Valsandoral',
      'Rania Virkas',
      'Shalendra Miraxina',
      'Elincia Petmys',
      'Geminara Elamyar',
      'Elmyra Vennala',
      'Tanulia Morran',
      'Artin Xyrxisys',
      'Darunia Xilmys',
      'Naevys Reyra',
    ];

    if(!gender) {
      return shuffle(maleNames.concat(femaleNames).concat(neutralNames));
    }

    if(gender === 'male') {
      return shuffle(maleNames);
    } else if(gender === 'neutral') {
      return shuffle(neutralNames);
    } else {
      return shuffle(femaleNames);
    }
  }
}

module.exports = mocks;
