export class Task {
  id: number;
  description: string;
  completed: boolean;

  constructor() {
    this.id = 0;
    this.description = "";
    this.completed = false;
  }
}
