import Id from '#seedwork/domain/value-objects/id.value-object'

export default class BaseEntity {
  private readonly _id: string
  private _createdAt: Date
  private _updatedAt: Date

  constructor (id?: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id ?? new Id().id
    this._createdAt = createdAt ?? new Date()
    this._updatedAt = updatedAt ?? new Date()
  }

  public get id (): string {
    return this._id
  }

  public get createdAt (): Date {
    return this._createdAt
  }

  public set createdAt (value: Date) {
    this._createdAt = value
  }

  public get updatedAt (): Date {
    return this._updatedAt
  }

  public set updatedAt (value: Date) {
    this._updatedAt = value
  }
}
