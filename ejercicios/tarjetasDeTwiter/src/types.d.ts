//en este archivo solo van las interfaves o typos que defienen la logica de la App
export interface Sub {
  nick: string;
  subMonth: number;
  avatar: string;
  description?: string;
}

export interface SubsResponseFromApi {
  nick: string;
  months: number;
  profileUrl: string;
  description?: string;
}
