import React from 'react';

const Form = () => (
  <form name="contact" method="post" action="/thanks" data-netlify="true" data-netlify-honeypot="bot-field" style={{
    fontFamily: `Arial`
  }}>
    <input type="hidden" name="form-name" value="contact"/>
    <p hidden="">
      <label>Don’t fill this out: <input name="bot-field"/></label>
    </p>
    <div style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `flex-start`
    }}>
    <div style={{width: `45%`}}>
    <p>
      <label>Your name:
        <br/>
        <input type="text" name="name" style={{width: `100%`, border: `2px solid rgb(242,242,242)`, borderRadius: `5px`}} />
      </label>
    </p>
    <p>
      <label>Your email:
        <br/>
        <input type="email" name="email" style={{width: `100%`, border: `2px solid rgb(242,242,242)`, borderRadius: `5px`}} />
      </label>
    </p>
    </div>
    <div style={{width: `45%`}}>
    <p>
      <label>Message:
        <br/>
        <textarea name="message" style={{width: `100%`, border: `2px solid rgb(242,242,242)`, borderRadius: `5px`}}></textarea>
      </label>
    </p>
    <p>
      <button type="submit" style={{
        background: `rgb(242,242,242)`,
        border: 0,
        borderRadius: `5px`,
        fontSize: `1.5rem`,
        padding: `5px 10px`,
        fontFamily: `Arial`,
        color: `#173449`,
        width: `100%`
      }}>Say hi</button>
    </p>
    </div>
    </div>
  </form>
)

export default Form;
