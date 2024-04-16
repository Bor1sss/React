import React, { PureComponent } from 'react'

class Form1 extends PureComponent {
  constructor(props) {
    super(props)
    this.array=[];
    this.state = {
      userName: '',
      email: '',
      lang_ua: false,
      lang_en: false,
      comments: '',
      city: '', 
      theme: '', 
      postMessage:[],
      validationName:'',
      validationEmail:''



    }
  
  }

  addComment = e => {
    e.preventDefault(); 
  
    const newComment = this.state.comments; 
  

    if (newComment.trim() !== '') {
     
      const updatedPostMessage = [...this.state.postMessage];
  

      updatedPostMessage.push(newComment);
  

      this.setState({ postMessage: updatedPostMessage });
  
     
      this.setState({ comments: '' });
    }
  }
  
  validation=()=>{
    if(this.state.userName.length<5){
     
      this.setState({ validationName: "Must be>5" })
      console.log(this.state.validationName)
    }
    else{
      this.setState({ validationName: "" })
      console.log(this.state.validationName)
    }
    if(this.state.email.length<5){
      this.setState({ validationEmail: "Email patern )" })
      console.log(this.state.validationEmail)
    }
    else{
      this.setState({ validationEmail: "" })
      console.log(this.state.validationEmail)
    }
  }

  handleChange = e => {


    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckChange = e => {

    this.setState({ [e.target.name]: e.target.checked })
  }

  render() {
    return (
      <>
        <h1>Form1</h1>
        <input
          type='text'
          name='userName'
          value={this.state.userName}
          onBlur={this.validation}
          onChange={this.handleChange}
          placeholder='Name'
        />
        <p>{this.state.validationName}</p>
        <p>{this.state.city}</p>

        <input
          type='email'
          name='email'
          value={this.state.email}
          onBlur={this.validation}
          onChange={this.handleChange}
          placeholder='Email'
        />
   <p>{this.state.validationName}</p>
        <input
          type='checkbox'
          id='lang_ua'
          name='lang_ua'
          checked={this.state.lang_ua}
          onChange={this.handleCheckChange}
        />
        <label htmlFor='lang_ua'>UA</label>

        <input
          type='checkbox'
          id='lang_en'
          name='lang_en'
          checked={this.state.lang_en}
          onChange={this.handleCheckChange}
        />
        <label htmlFor='lang_en'>EN</label>

        <select
          name='city'
          value={this.state.city}
          onChange={this.handleChange}
        >
          <option value=''>Select City</option>
          <option value='New York'>New York</option>
          <option value='London'>London</option>
          <option value='Paris'>Paris</option>
        </select>

        <textarea
          name='comments'
          value={this.state.comments}
          onChange={this.handleChange}
          placeholder='Comments'
        />
        <button name='postMessage'  onClick={this.addComment}>Send</button>
        <select
          name='theme'
          value={this.state.theme}
          onChange={this.handleChange}
        >
          <option value=''>Select Theme</option>
          <option value='Dark'>Dark</option>
          <option value='Light'>Light</option>
          <option value='Colorful'>Colorful</option>
        </select>


        <p>{this.state.city}</p>
        <ul>
  {this.state.postMessage.map((message, index) => (
    <li key={index}>{message}</li>
  ))}
</ul>

        <p>{this.state.theme}</p>
      </>
    )
  }
}

export default Form1