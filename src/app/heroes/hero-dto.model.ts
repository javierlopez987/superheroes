export interface HeroDto {
  id?: string;
  name: string;
  powerstats: any;
  biography?: any;
  appearance?: any;
  work?: any;
  connections?: any;
  image: { url: string }
}