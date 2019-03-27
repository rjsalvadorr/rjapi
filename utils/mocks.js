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
   * Returns a race-appropriate name
   */
  getRaceAppropriateName: function(raceName) {
    let name = null;

    switch(raceName.toLowerCase()) {
      case 'dwarf':
        name = sample(this.getDwarfNames())
        break;
      case 'elf':
        name = sample(this.getElfNames())
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
   * Returns a list of 40 dwarf names
   */
  getDwarfNames: function() {
    return [
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
  },
  /**
   * Returns a list of 60 elf names
   */
  getElfNames: function() {
    return [
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
      'Ellarian Valsandoral',
      'Rania Virkas',
      'Shalendra Miraxina',
      'Elincia Petmys',
      'Geminara Elamyar',
      'Elmyra Vennala',
      'Tanulia Morran',
      'Artin Xyrxisys',
      'Darunia Xilmys',
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
      'Naevys Reyra',
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
  }
}

module.exports = mocks;
