import React from 'react'
import { Link } from 'react-router-dom'
import Typist from 'react-typist';

const Met = () => {
   
  return (
    <div className="container pt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <Typist cursor={{ element:'' }}>
                           <h3>
                            Do You Want to Connect on Whatsapp?
                            <br />
                            <br /> If so click on below Button any time you want.
                            </h3> 
                            <Link href="whatsapp://send?phone=923041577841" className="btn-grad text-success">Junaid's Here</Link>
                            
                        </Typist>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Met