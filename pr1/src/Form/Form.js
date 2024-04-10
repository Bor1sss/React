import React, { PureComponent } from 'react';
import $ from 'jquery';
import './Form.css'
class Form extends PureComponent {
    handleClick = () => {
        const name = $('input[type="text"][placeholder="Name"]').val();
        const surname = $('input[type="text"][placeholder="Surname"]').val();
        const tel = $('input[type="number"][placeholder="tel"]').val();
        const email = $('input[type="email"][placeholder="email"]').val();

        const message = `Name: ${name}\nSurname: ${surname}\nTel: ${tel}\nEmail: ${email}`;
        alert(message);
    }
    render() {
        return (
        <section>
              <input type='text'   placeholder='Name' required></input>
              <input type='text'   placeholder='Surname' required></input>
              <input type='number' placeholder='tel' required></input>
              <input type='email'  placeholder='email' required></input>
              <button onClick={this.handleClick}>
                SUBMIT
              </button>
        </section>
        );
    }
}

export default Form;
