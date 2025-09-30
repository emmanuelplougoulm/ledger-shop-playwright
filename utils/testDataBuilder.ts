import { UserData } from '../types/index'

export class UserBuilder {
  private firstname: string = 'default_firstname'
  private lastname: string = 'default_lastname'
  private email: string = 'user@example.com'
  private address: string = '2, rue de la paix'
  private postalCode: string = '75000'
  private city: string = 'default city'
  private phone: string = '+33000000000'

  withFirstname(firstname: string): UserBuilder {
    this.firstname = firstname
    return this
  }

  withLastname(lastname: string): UserBuilder {
    this.lastname = lastname
    return this
  }

  withEmail(email: string): UserBuilder {
    this.email = email
    return this
  }

  withAddress(address: string): UserBuilder {
    this.address = address
    return this
  }

  withPostalCode(postalCode: string): UserBuilder {
    this.postalCode = postalCode
    return this
  }

  withCity(city: string): UserBuilder {
    this.city = city
    return this
  }

  withPhone(phone: string): UserBuilder {
    this.phone = phone
    return this
  }

  build(): UserData {
    return { firstname: this.firstname, lastname: this.lastname, email: this.email, address: this.address, postalCode: this.postalCode, city: this.city, phone: this.phone } as UserData
  }
}
