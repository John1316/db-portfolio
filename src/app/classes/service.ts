export class Service {
  constructor(
    public id:           number,
    public en_title:     string,
    public ar_title:     string,
    public en_text:      string,
    public ar_text:      string,
    public icon:         string,
    public image:        string,
    public banner_image: string,
    public en_slug:      string,
    public ar_slug:      string,
  public   created_at:   Date,
  public   updated_at:   Date,
  ){}
}
