import React from 'react'

export default function About(props) {

   let myStyle ={
        color:props.mode === 'dark'? 'rgb(211 200 217)' : 'black',
        backgroundColor : props.mode === 'dark'? '#373b3e' : 'white',
   }
    


  return (
     <div className='container' style={{color:props.mode === 'dark'? 'white' : '#042743'}}>
        <h1 className='container my-3' style={myStyle}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils helps you analyze your text quickly and efficiently. You can count words and characters, estimate reading time, and understand your content better. It is useful for students, writers, and developers who want quick text insights. 
            </div>
                </div>
            </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free to Use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is completely free to use. There are no subscriptions, no hidden charges, and no login required. You can use all features anytime without any limitation.
                
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser Compatibility</strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils works smoothly on all modern web browsers including:

                            Google Chrome

                            Mozilla Firefox

                            Microsoft Edge

                            Safari

                            The app is responsive and works well on both desktop and mobile devices..
            </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

