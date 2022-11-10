export class Casestudy {
  constructor(
    public id:           number,
    public en_title:     string,
    public ar_title:     string,
    public en_text:      string,
    public ar_text:      string,
    public image:        string,
    public banner_image: string,
    public created_at:   Date,
    public updated_at:   Date,
    public logo?: string,
    public type?: string,
  ){}
}
