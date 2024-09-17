import imgBlueBoat from '@/assets/tempImg/blue_boat.jpg'
import imgCoffee from '@/assets/tempImg/coffee.jpg'
import imgYellowFlower from '@/assets/tempImg/yellow_flower.jpg'
import imgSunnyPine from '@/assets/tempImg/sunny_pine1.jpg'
import imgPine from '@/assets/tempImg/pine.jpg'
import imgEnd from '@/assets/tempImg/at_the_end.jpg'
import imgBridge from '@/assets/tempImg/bridge.jpg'
import imgJump from '@/assets/tempImg/jump.jpg'
import imgLonely from '@/assets/tempImg/lonly_tree.jpg'
import imgMarble from '@/assets/tempImg/marmor.jpg'
import imgPines from '@/assets/tempImg/pines.jpg'
import imgDesign1 from '@/assets/tempImg/design1.jpg'
import imgDesign2 from '@/assets/tempImg/design2.jpg'
import imgDesign3 from '@/assets/tempImg/design3.jpg'
import imgDesign4 from '@/assets/tempImg/design4.jpg'
import imgDesign5 from '@/assets/tempImg/design5.jpg'
import imgDesign6 from '@/assets/tempImg/design6.jpg'
import imgDesign7 from '@/assets/tempImg/design7.jpg'
import imgDesign8 from '@/assets/tempImg/design8.jpg'
import imgDesign9 from '@/assets/tempImg/design9.jpg'
import imgArt1 from '@/assets/tempImg/art1.jpg'
import imgArt2 from '@/assets/tempImg/art2.jpg'
import imgArt3 from '@/assets/tempImg/art3.jpg'
import imgArt4 from '@/assets/tempImg/art4.jpg'
import imgArt5 from '@/assets/tempImg/art5.jpg'
import competitionBanner1 from '@/assets/tempImg/competition_banner1.jpg'
import competitionBanner2 from '@/assets/tempImg/competition_banner2.jpg'
import competitionBanner3 from '@/assets/tempImg/competition_banner3.jpg'

const imagesData = [
  {
    id: 1,
    url: imgBlueBoat,
    type: 'photo',
    name: 'Синяя лодка',
    tags: ['Природа', 'Река', 'Лес', 'Природа', 'пейзаж'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 1,
      name: 'Shmon Photos'
    },
    date: '19.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 2,
    url: imgCoffee,
    type: 'photo',
    name: 'Зёрна кофе',
    tags: ['Кофе', 'Кухня', 'интерьер'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 1,
      name: 'Shmon Photos'
    },
    date: '11.06.2023',
    isHorizontal: false,
    isPublic: true
  },
  {
    id: 3,
    url: imgYellowFlower,
    type: 'photo',
    name: 'Желтый цветок',
    tags: ['Природа', 'Цветы', 'Лес'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 1,
      name: 'Shmon Photos'
    },
    date: '12.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 4,
    url: imgSunnyPine,
    type: 'photo',
    name: 'Ель',
    tags: ['Природа', 'Дерево', 'Лес'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 1,
      name: 'Shmon Photos'
    },
    date: '10.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 5,
    url: imgPine,
    type: 'photo',
    name: 'Макушка сосны',
    tags: ['Природа', 'Дерево', 'Лес'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 2,
      name: 'Phive Photos'
    },
    date: '9.06.2023',
    isHorizontal: false,
    isPublic: true
  },
  {
    id: 6,
    url: imgMarble,
    type: 'photo',
    name: 'Мраморный карьер',
    tags: ['Пейзаж', 'Мрамор', 'камень', 'скала'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 2,
      name: 'Phive Photos'
    },
    date: '12.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 7,
    url: imgJump,
    type: 'photo',
    name: 'Прыжок',
    tags: ['Активность', 'Природа', 'Прыжок', 'человек'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 2,
      name: 'Phive Photos'
    },
    date: '11.06.2023',
    isHorizontal: false,
    isPublic: true
  },
  {
    id: 8,
    url: imgPines,
    type: 'photo',
    name: 'Шишки',
    tags: ['Природа', 'дерево', 'шишки'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 2,
      name: 'Phive Photos'
    },
    date: '10.06.2023',
    isHorizontal: false,
    isPublic: true
  },
  {
    id: 9,
    url: imgBridge,
    type: 'photo',
    name: 'Мост',
    tags: ['Строения', 'Пейзаж', 'река'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 2,
      name: 'Phive Photos'
    },
    date: '11.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 10,
    url: imgLonely,
    type: 'photo',
    name: 'Одиночество',
    tags: ['Природа', 'Байкал', 'Дерево', 'пейзаж', 'озеро'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 2,
      name: 'Phive Photos'
    },
    date: '15.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 11,
    url: imgEnd,
    type: 'photo',
    name: 'На краю',
    tags: ['Природа', 'Байкал', 'Пейзаж', 'Дерево', 'Озеро'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 2,
      name: 'Phive Photos'
    },
    date: '9.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 12,
    url: imgDesign1,
    type: 'design',
    name: 'Pine tree',
    tags: ['Logo', 'Minimalism', 'Nature', 'минимализм', 'Лого', 'Природа'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 3,
      name: 'Shmon Design'
    },
    date: '1.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 13,
    url: imgDesign2,
    type: 'design',
    name: 'Leaf Nature',
    tags: ['Logo', 'Minimalism', 'Nature', 'Лого', 'Минимализм', 'Природа'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 3,
      name: 'Shmon Design'
    },
    date: '3.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 14,
    url: imgDesign3,
    type: 'design',
    name: 'Sport Car',
    tags: ['Logo', 'Minimalism', 'Auto', 'Лого', 'Минимализм', 'Авто', 'Машина'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 4,
      name: 'Phive Design'
    },
    date: '1.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 15,
    url: imgDesign4,
    type: 'design',
    name: 'Desktop',
    tags: ['Logo', 'Minimalism', 'Desktop', 'Лого', 'Минимализм', 'Компьютер', 'Технологии'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 4,
      name: 'Phive Design'
    },
    date: '13.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 16,
    url: imgDesign5,
    type: 'design',
    name: 'IT',
    tags: ['Logo', 'Minimalism', 'Development', 'Лого', 'Минимализм', 'Технологии', 'Разработка'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 3,
      name: 'Shmon Design'
    },
    date: '7.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 17,
    url: imgDesign6,
    type: 'design',
    name: 'Office',
    tags: ['Logo', 'Minimalism', 'Office', 'Лого', 'Минимализм', 'Офис', 'Канцелярия'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 3,
      name: 'Shmon Design'
    },
    date: '10.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 18,
    url: imgDesign7,
    type: 'design',
    name: 'Office work',
    tags: ['Logo', 'Minimalism', 'Office', 'Лого', 'Минимализм', 'Работа', 'Офис'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 4,
      name: 'Phive Design'
    },
    date: '12.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 19,
    url: imgDesign8,
    type: 'design',
    name: 'Moto',
    tags: ['Logo', 'Minimalism', 'Moto', 'Лого', 'Минимализм', 'Мото', 'Авто'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 3,
      name: 'Shmon Design'
    },
    date: '11.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 20,
    url: imgDesign9,
    type: 'design',
    name: 'Photo',
    tags: ['Logo', 'Minimalism', 'Photo', 'Лого', 'Минимализм', 'Фото', 'Техника'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 3,
      name: 'Shmon Design'
    },
    date: '15.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 21,
    url: imgArt1,
    type: 'art',
    name: 'Lady',
    tags: ['Art', 'Color', 'Women', 'Арт', 'Цвет', 'Женщина', 'Портрет', 'portrait'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 5,
      name: 'Shmon Arts'
    },
    date: '17.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 22,
    url: imgArt2,
    type: 'art',
    name: 'Music',
    tags: ['Art', 'Color', 'Musician', 'Арт', 'Музыка', 'Музыкант', 'цвет'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 5,
      name: 'Shmon Arts'
    },
    date: '11.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 23,
    url: imgArt3,
    type: 'art',
    name: 'Camera',
    tags: ['Art', 'Color', 'Camera', 'Арт', 'цвет', 'камера'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 5,
      name: 'Shmon Arts'
    },
    date: '12.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 24,
    url: imgArt4,
    type: 'art',
    name: 'Road',
    tags: ['Art', 'Color', 'Sport', 'Арт', 'цвет', 'дорога', 'спорт', 'авто'],
    author: {
      id: 2,
      name: 'Phive'
    },
    album: {
      id: 6,
      name: 'Phive Arts'
    },
    date: '13.06.2023',
    isHorizontal: true,
    isPublic: true
  },
  {
    id: 25,
    url: imgArt5,
    type: 'art',
    name: 'River',
    tags: ['Art', 'Color', 'River', 'Арт', 'река', 'цвет', 'пейзаж', 'природа', 'лес'],
    author: {
      id: 1,
      name: 'Shmon'
    },
    album: {
      id: 5,
      name: 'Shmon Arts'
    },
    date: '7.06.2023',
    isHorizontal: true,
    isPublic: true
  }
]

const eventsData = [
  {
    id: 1,
    bannerUrl: competitionBanner1,
    name: 'SUMMER 2024',
    tag: 'arthesis_summer_2024',
    organizer: 'ARThesis',
    type: 'photo',
    theme: 'Пейзажи, лайфстайл, урбан',
    prize: 'Почетное звание победителя :)',
    startDate: '1.08.2024',
    finishDate: '20.08.2024',
    resultDate: '27.08.2024',
    users: [
      {
        id: 1,
        name: 'Shmon'
      },
      {
        id: 2,
        name: 'Phive'
      }
    ],
    images: [
      {
        id: 1,
        url: imgBlueBoat,
        name: 'Синяя лодка',
        tags: ['Природа', 'Река', 'Лес'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Arts'
        },
        date: '12.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 3,
        url: imgYellowFlower,
        name: 'Желтый цветок',
        tags: ['Природа', 'Цветы', 'Лес'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Arts'
        },
        date: '12.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 5,
        url: imgPine,
        name: 'Макушка сосны',
        tags: ['Природа', 'Дерево', 'Лес'],
        author: {
          id: 2,
          name: 'Phive'
        },
        album: {
          id: 2,
          name: 'Phive Photos'
        },
        date: '9.06.2023',
        isHorizontal: false,
        isPublic: true
      },
      {
        id: 10,
        url: imgLonely,
        name: 'Одиночество',
        tags: ['Природа', 'Байкал', 'Дерево'],
        author: {
          id: 2,
          name: 'Phive'
        },
        album: {
          id: 2,
          name: 'Phive Photos'
        },
        date: '12.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 2,
        url: imgCoffee,
        name: 'Зёрна кофе',
        tags: ['Кофе', 'Кухня'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Arts'
        },
        date: '11.06.2023',
        isHorizontal: false,
        isPublic: true
      }
    ],
    isFinished: false,
    winners: null,
    greatWinner: null
  },
  {
    id: 2,
    bannerUrl: competitionBanner3,
    name: 'ЛОГО ФЬЮЖН',
    tag: 'arthesis_logo_fusion',
    organizer: 'ARThesis',
    type: 'design',
    theme: 'Логотип на произвольную тему',
    prize: 'Почетное звание логомейкера :D',
    startDate: '5.08.2024',
    finishDate: '10.08.2024',
    resultDate: '15.08.2024',
    users: [
      {
        id: 1,
        name: 'Shmon'
      },
      {
        id: 2,
        name: 'Phive'
      }
    ],
    images: [
      {
        id: 20,
        url: imgDesign9,
        type: 'design',
        name: 'Photo',
        tags: ['Logo', 'Minimalism', 'Photo'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Design'
        },
        date: '15.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 14,
        url: imgDesign3,
        type: 'design',
        name: 'Sport Car',
        tags: ['Logo', 'Minimalism', 'Auto'],
        author: {
          id: 2,
          name: 'Phive'
        },
        album: {
          id: 2,
          name: 'Phive Design'
        },
        date: '1.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 18,
        url: imgDesign7,
        type: 'design',
        name: 'Office work',
        tags: ['Logo', 'Minimalism', 'Office'],
        author: {
          id: 2,
          name: 'Phive'
        },
        album: {
          id: 2,
          name: 'Phive Design'
        },
        date: '12.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 15,
        url: imgDesign4,
        type: 'design',
        name: 'Desktop',
        tags: ['Logo', 'Minimalism', 'Desktop'],
        author: {
          id: 2,
          name: 'Phive'
        },
        album: {
          id: 2,
          name: 'Phive Design'
        },
        date: '13.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 19,
        url: imgDesign8,
        type: 'design',
        name: 'Moto',
        tags: ['Logo', 'Minimalism', 'Moto'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Design'
        },
        date: '11.06.2023',
        isHorizontal: true,
        isPublic: true
      }
    ],
    isFinished: false,
    winners: null,
    greatWinner: null
  },
  {
    id: 3,
    bannerUrl: competitionBanner2,
    name: 'WHAT A COLOR',
    tag: 'arthesis_what_a_color',
    organizer: 'ARThesis',
    type: 'art',
    theme: 'Арты на произвольную тему',
    prize: 'Почетное звание победителя :)',
    startDate: '1.05.2024',
    finishDate: '20.05.2024',
    resultDate: '27.05.2024',
    users: [
      {
        id: 1,
        name: 'Shmon'
      },
      {
        id: 2,
        name: 'Phive'
      }
    ],
    images: [
      {
        id: 21,
        url: imgArt1,
        type: 'art',
        name: 'Lady',
        tags: ['Art', 'Color', 'Women'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Arts'
        },
        date: '17.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 22,
        url: imgArt2,
        type: 'art',
        name: 'Music',
        tags: ['Art', 'Color', 'Musician'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Arts'
        },
        date: '11.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 23,
        url: imgArt3,
        type: 'art',
        name: 'Camera',
        tags: ['Art', 'Color', 'Camera'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Arts'
        },
        date: '12.06.2023',
        isHorizontal: true,
        isPublic: true
      },
      {
        id: 24,
        url: imgArt4,
        type: 'art',
        name: 'Road',
        tags: ['Art', 'Color', 'Sport'],
        author: {
          id: 2,
          name: 'Phive'
        },
        album: {
          id: 1,
          name: 'Phive Arts'
        },
        date: '13.06.2023',
        isHorizontal: true,
        isPublic: true
      }
    ],
    isFinished: true,
    winners: [
      {
        id: 21,
        url: imgArt1,
        type: 'art',
        name: 'Lady',
        tags: ['Art', 'Color', 'Women'],
        author: {
          id: 1,
          name: 'Shmon'
        },
        album: {
          id: 1,
          name: 'Shmon Arts'
        },
        date: '17.06.2023',
        isHorizontal: true,
        isPublic: true
      }
    ],
    greatWinner: {
      id: 21,
      url: imgArt1,
      type: 'art',
      name: 'Lady',
      tags: ['Art', 'Color', 'Women'],
      author: {
        id: 1,
        name: 'Shmon'
      },
      album: {
        id: 1,
        name: 'Shmon Arts'
      },
      date: '17.06.2023',
      isHorizontal: true,
      isPublic: true
    }
  }
]

export { imagesData, eventsData }
