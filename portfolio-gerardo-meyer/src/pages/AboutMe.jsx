import React from 'react'

export default function AboutMe() {
  return (
    <>
        <div className="container" style={{padding: '5%'}}>
            <div className="row">
                <div className="col-lg-6">
                    <h1>Acerca de Gerardo</h1>
                    <p>
                        Mi nombre es Gerardo Torres Meyer, tengo 23 años de edad y vivo en México.
                        Al día de hoy estoy estudiando ingeniería en sistemas computacionales, y me gusta mucho
                        el programar en desarrollo web e inteligencia artificial (Machine Learning).
                    </p>
                </div>

                <div className="col-lg-6">
                    <img 
                    style={{maxWidth: '60%', borderRadius: '50%'}}
                    src="https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/280748461_5130188213741074_1268672009853294416_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KtcJnpH53PEAX9hbcvB&_nc_ht=scontent-qro1-2.xx&oh=00_AfAtJL5zb_C4481JImzXLBozI4HPEriR02QWJa4f_kUfRQ&oe=6444F9E0" alt="" />
                </div>
            </div>
        </div>

        <hr />

        <div className="container" style={{padding: '5%'}}>
            <div className="row">
                <div className="col-lg-6">
                    <img 
                    style={{maxWidth: '100%', borderRadius: '10%'}}
                    src="https://www.solbyte.com/blog/wp-content/uploads/desarrollo-web-a-medida.png" alt="" />
                </div>

                <div className="col-lg-6">
                <h1>Desarrollo Web</h1>
                    <p>
                        Empece a programar mi primera página hace algunos años en HTML, CSS y JS.
                        Después de haber tomado cursos en línea, descubrí UCamp y decidí inscribirme para
                        terminar de aprender lo que ya había aprendido y aprender cosas nuevas. 
                    </p>
                </div>
            </div>
        </div>

        <hr />

        <div className="container" style={{padding: '5%'}}>
            <div className="row">
            <div className="col-lg-6">
                    <h1>Inteligencia artificial</h1>
                    <p>
                        A la par que iba aprendiendo desarrollo web me metí en el estudio de inteligencia artificial. De hecho, 
                        para el 2024 tengo planeado hacer una maestría en este campo en Vancouver, Canada. 
                    </p>
                </div>

                <div className="col-lg-6">
                    <img 
                    style={{maxWidth: '100%', borderRadius: '10%'}}
                    src="https://virtualeduca.org/mediacenter/wp-content/uploads/2023/02/inteligencia-artificial.jpg" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
