import {QueueItem} from "./queue-item/queue-item.component";

export interface SlideConfig {
  items: QueueItem[],
  interval: number
}

export const defaultConfig: SlideConfig = {
  interval: 10,
  items: [
    {
      background: "https://cache.desktopnexus.com/wallpapers/2461/2461542-1920x1080-white-swiss-shepherd-forest-trees-beautiful-white-dog-pets-besthqwallpapers.com-1920x1080.jpg?st=_0x_AYvX2VwsKQg37_f-8Q&e=1605830085",
      color: "#008000"
    },
    {
      background: "https://external-preview.redd.it/Dw0AmpcfjZ9WzXPz0buiRjnHZdOkM-PSGtE5lpTvYqA.jpg?width=1024&auto=webp&s=67e8e522bf2b7d5bc9b1495b9d7de7923c1956b5",
      color: "#59adf8"
    }
  ]
}
