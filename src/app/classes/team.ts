export class Team {
  constructor(
    public id:         number,
    public en_name:    string,
    public ar_name:    string,
    public en_role:    string,
    public ar_role:    string,
    public facebook:   string,
    public instagram:  string,
    public twitter:    string,
    public image:      string,
    public created_at: Date,
    public updated_at: Date,
  ){}
}
