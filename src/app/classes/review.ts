export class Review {
  constructor(
    public id:          number,
    public en_name:     string,
    public ar_name:     string,
    public en_role:     string,
    public ar_role:     string,
    public en_feedback: string,
    public ar_feedback: string,
    public image:       string,
    public status:      number,
    public created_at:  Date,
    public updated_at:  Date
    ){}
}
