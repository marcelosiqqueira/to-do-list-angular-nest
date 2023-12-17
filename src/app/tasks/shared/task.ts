export class Task {
  _id: string;
  description: string;
  completed: boolean;

  constructor() {
    this._id = '';
    this.description = "";
    this.completed = false;
  }
}
