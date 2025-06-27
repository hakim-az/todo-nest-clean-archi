export class Todo {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string | null,
    public readonly completed: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}

  static create(
    id: string,
    title: string,
    description?: string,
    completed: boolean = false
  ): Todo {
    const now = new Date()
    return new Todo(id, title, description || null, completed, now, now)
  }

  markAsCompleted(): Todo {
    return new Todo(
      this.id,
      this.title,
      this.description,
      true,
      this.createdAt,
      new Date()
    )
  }

  markAsIncomplete(): Todo {
    return new Todo(
      this.id,
      this.title,
      this.description,
      false,
      this.createdAt,
      new Date()
    )
  }

  updateTitle(newTitle: string): Todo {
    return new Todo(
      this.id,
      newTitle,
      this.description,
      this.completed,
      this.createdAt,
      new Date()
    )
  }

  updateDescription(newDescription: string): Todo {
    return new Todo(
      this.id,
      this.title,
      newDescription,
      this.completed,
      this.createdAt,
      new Date()
    )
  }
}
