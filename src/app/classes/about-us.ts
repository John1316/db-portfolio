export class AboutUs {
  constructor(
    public id:                     number,
    public about_banner_image:     string,
    public about_section_image:    string,
    public en_about_section_title: string,
    public ar_about_section_title: string,
    public en_about_section_text:  string,
    public ar_about_section_text:  string,
    public mission_vision_image:   string,
    public en_vision_title:        string,
    public ar_vision_title:        string,
    public en_vision_text:         string,
    public ar_vision_text:         string,
    public en_mission_title:       string,
    public ar_mission_title:       string,
    public en_mission_text:        string,
    public ar_mission_text:        string,
    public created_at:             Date,
    public updated_at:             Date,
  ){}
}
