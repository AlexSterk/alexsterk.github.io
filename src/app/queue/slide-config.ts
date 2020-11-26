import {QueueItem} from './queue-item/queue-item.component';

export interface SlideConfig {
  items: QueueItem[];
  interval: number;
}

export const defaultConfig: SlideConfig = {
  interval: 240,
  items: [
    {
      background: '/assets/image1.png',
      color: '#f5a671',
    },
    {
      background: '/assets/image2.png',
      color: '#64b4e2',
    },
    {
      background: '/assets/image3.png',
      color: '#d4f87e',
    },
    {
      background: '/assets/image4.png',
      color: '#ffc800',
    },
    {
      background: '/assets/image5.png',
      color: '#9e49ff',
    },
    {
      background: '/assets/image6.png',
      color: '#ff4e4e',
    },
    {
      background: '/assets/image7.png',
      color: '#ff5100',
    },
    {
      background: '/assets/image8.png',
      color: '#c0dbd1',
    },
    {
      background: '/assets/image9.png',
      color: '#c88f4e',
    },
    {
      background: 'https://cache.desktopnexus.com/wallpapers/2461/2461542-1920x1080-white-swiss-shepherd-forest-trees-beautiful-white-dog-pets-besthqwallpapers.com-1920x1080.jpg?st=_0x_AYvX2VwsKQg37_f-8Q&e=1605830085',
      color: '#008000'
    },
    {
      background: 'https://external-preview.redd.it/Dw0AmpcfjZ9WzXPz0buiRjnHZdOkM-PSGtE5lpTvYqA.jpg?width=1024&auto=webp&s=67e8e522bf2b7d5bc9b1495b9d7de7923c1956b5',
      color: '#59adf8'
    }
  ]
};
