export class AboutUsHome {
  constructor(

    public id:                   number,
    public en_about_home_title:  string,
    public ar_about_home_title:  string,
    public en_about_home_text:   string,
    public ar_about_home_text:   string,
    public en_first_icon_title:  string,
    public ar_first_icon_title:  string,
    public first_icon:           File,
    public en_second_icon_title: string,
    public ar_second_icon_title: string,
    public second_icon:          File,
    public en_third_icon_title:  string,
    public ar_third_icon_title:  string,
    public third_icon:           File,
    public en_fourth_icon_title: string,
    public ar_fourth_icon_title: string,
    public fourth_icon:          File,
    public created_at:           Date,
    public updated_at:           Date,
  )
  {}
}
