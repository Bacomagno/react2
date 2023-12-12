import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import '../css/ContactenosForm.css';
// import banner from '../../src/img/about_1.png';
import banner from '../../src/img/Contactenos/banner.jpg';

const ContactoForm = () => {

  const tiposDocumento = ['Cédula de ciudadanía', 'Tarjeta de identidad', 'Cédula de extranjeria', 'Pasaporte', 'Otro'];
  const programas = [
    'Ingeniería en Seguridad Industrial e Higiene Ocupacional',
    'Ingenieria de Software',
    'Técnico Profesional en Seguridad y Salud en el trabajo',
    'Técnico Profesional en Seguridad y Salud en el trabajo (Virtual)',
    'Administración de Empresas',
    'Contaduría Pública',
    'Administración de Negocios Internacionales',
    'Administración Agropecuaria',
    'Tecnólogo en Gestión Ambiental',
    'Tecnólogo en Gestión del Talento Humano',
    'Tecnólogo en Gestión Administrativa y Financiera',
    'Comunicación Social',
    'Diseño Gráfico',
    'Mercadeo',
    'Gastronomía',
    'Derecho',
    'Especialización en Comunicación Digital',
    'Especialización en Gerencia de la Seguridad y Salud en el Trabajo',
    'Especialización en Gerencia de la Calidad',
    'Especialización en Gerencia de Proyectos',
    'Especialización en Ambientes Virtuales',
    'Diplomados',
    'Cursos',
    'Talleres',
    'Otro',
  ]
  const departamentos =[
    'AMAZONAS',
    'ANTIOQUIA',
    'ARAUCA',
    'ATLÁNTICO',
    'BOGOTÁ', 
    'BOLÍVAR',
    'BOYACÁ',
    'CALDAS',
    'CAQUETÁ',
    'CASANARE',
    'CAUCA',
    'CESAR',
    'CHOCÓ',
    'CÓRDOBA',
    'CUNDINAMARCA',
    'GUAINÍA',
    'GUAVIARE',
    'HUILA',
    'LA GUAJIRA', 
    'MAGDALENA',
    'META',
    'NARIÑO',
    'NORTE  DE SANTANDER',
    'PUTUMAYO',
    'QUINDÍO',
    'RISARALDA',
    'SAN ANDRÉS Y PROVIDENCIA', 
    'SANTANDER',
    'SUCRE',
    'TOLIMA',
    'VALLE',
    'VAUPÉS',
    'VICHADA',
  ]

    const initialFormData = {
      tipoDocumento:'',
      numeroDocumento: '',
      age: '',
      departamento: '',
      programa: '',
      name: '',
      phone: '',
      email: '',
      message: '',
    };
  
    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formErrors, setFormErrors] = useState({
      tipoDocumento:'',
      numeroDocumento: '',
      age: '',
      departamento: '',
      programa: '',
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  
    const validateForm = () => {
      let valid = true;
      const errors = {};
  
      // Validar el campo de nombre
      if (formData.name.trim() === '') {
        errors.name = 'Campo obligatorio';
        valid = false;
      }
  
      // Validar el campo de correo electrónico
      if (formData.email.trim() === '') {
        errors.email = 'Campo obligatorio';
        valid = false;
      }
  
      // Validar el campo de mensaje
      if (formData.message.trim() === '') {
        errors.message = 'Campo obligatorio';
        valid = false;
      }
  
      //Validar el campo de telefono
      if(formData.phone.trim() === '' ) {
        errors.phone = 'Campo obligatorio';
        valid = false;
      }

      if(formData.phone.trim().length !== 10) {
        errors.phone = 'El formato de número de teléfono no es valido';
        valid = false
      }
  
      setFormErrors(errors);
      return valid;
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  
      // Limpiar el mensaje de error cuando se cambia el contenido del campo
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!validateForm()) {
        // Mostrar un mensaje de error general si el formulario no es válido
        console.error('El formulario contiene errores. No se puede enviar.');
        return;
      }
  
      const serviceId = 'service_6kusbq6';
      const templateId = 'template_sx9gdui';
      const userId = 'AsQq2VOMoIPxeVE-X';
  
      try {
        const response = await emailjs.sendForm(serviceId, templateId, e.target, userId);
        console.log('¡Formulario enviado con éxito!', response);
  
        // Limpiar los campos después de un envío exitoso
        setFormData(initialFormData);
        // Mostrar el mensaje de éxito
        setSuccessMessage('¡Pronto nos comunicaremos contigo!');
        setShowSuccessMessage(true);
  
        // Ocultar el mensaje después de unos segundos
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    };
  
    return (
        <>
            <div className="breadcrumbsContactenos d-flex align-items-center" style={{backgroundImage: `url(${banner})`}}>
                <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade"></div>
            </div>
            <section id="about" className="col-lg-8 mx-auto about_contactForm">
                <div className="container" data-aos="fade-up">
                    <div className="row position-relative">
                        <div className="col-lg-7 about-img">
                            <div className='formContac'>
                                <div className='tittle_form'>
                                <h1 className="h1_contactForm">Contáctenos</h1>
                                </div>      
                                <form onSubmit={handleSubmit} className="contact_item_form">
                                  <div className="row position-relative">
                                    <div className="item_contactForm_div col-lg-4">
                                      <label 
                                        className="label_contactForm_div" 
                                        htmlFor="tipoDocumento"
                                      >
                                        <select 
                                          id="tipoDocumento"
                                          name="tipoDocumento"
                                          value={formData.tipoDocumento}
                                          className="input_contactForm_div"
                                          onChange={handleChange}
                                          placeholder="Tipo de documento"
                                          required
                                        >
                                          {tiposDocumento.map((tipoDocumento, index) => (
                                          <option key={index} value={tipoDocumento}>
                                            {tipoDocumento}
                                          </option>
                                          ))}
                                        </select>
                                        <span className="span_contactForm">Tipo de documento</span>
                                        {formErrors.tipoDocumento && <p className="error-message">{formErrors.tipoDocumento}</p>}
                                      </label>
                                    </div>
                                    <div className="item_contactForm_div col-lg-8">
                                      <label className="label_contactForm_div">
                                      <input 
                                        id="numeroDocumento"
                                        name="numeroDocumento"
                                        type="text"
                                        className="input_contactForm_div"
                                        value={formData.numeroDocumento}
                                        onChange={handleChange}
                                        placeholder="Número de documento"
                                        required
                                      />
                                      <span className="span_contactForm">Número de documento</span>
                                      {formErrors.numeroDocumento && <p className="error-message">{formErrors.numeroDocumento}</p> }
                                      </label>
                                    </div>
                                  </div>
                                  <div className="item_contactForm">    
                                      <label className='label_contactForm' htmlFor="name">
                                      <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        className='input_contactForm'
                                        onChange={handleChange}
                                        placeholder="Nombre"
                                        
                                        required 
                                      />
                                      <span className='span_contactForm'>Ingresa tu nombre completo</span>
                                      {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                                      </label>
                                  </div>
                                  <div className="item_contactForm">      
                                      <label className='label_contactForm'> 
                                      <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        className='input_contactForm' 
                                        placeholder="Correo"
                                        required 
                                      />
                                      <span className='span_contactForm'> <i className=" icon_form"></i> Correo electrónico</span>
                                      {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                                      </label>
                                  </div>
                                  <div className="row position-relative">                                  
                                    <div className='item_contactForm_div col-lg-8'>
                                        <label className={`label_contactForm ${formData.phone ? 'active' : ''}`}>
                                        <input
                                            type='text'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className='input_contactForm'
                                            placeholder='Celular'
                                            required>
                                        </input>
                                        <span className='span_contactForm'> Celular</span>
                                        {formErrors.phone && <p className='error-message'>{formErrors.phone}</p> }
                                        </label>
                                    </div>
                                    <div className="item_contactForm_div col-lg-4">
                                      <label className="label_contactForm">
                                        <input
                                          type="number"
                                          name="age"
                                          value={formData.age}
                                          onChange={handleChange}
                                          className="input_contactForm"
                                          placeholder="Edad"
                                          required
                                          />
                                        <span className="span_contactForm">Edad</span>
                                        {formErrors.age && <p className="error-message"> {formErrors.age} </p> }
                                      </label>
                                    </div>
                                  </div>                        
                                  <div className="item_contactForm">
                                    <label className="label_contactForm">
                                      <select
                                        id="programa"
                                        name="programa"
                                        value={formData.programa}
                                        onChange={handleChange}
                                        className="input_contactForm"
                                        placeholder="Programa"
                                        required
                                      >
                                        {programas.map((programa, index) => (
                                          <option key={index} value={programa}>
                                            {programa}
                                          </option>
                                        ))}
                                      </select>
                                      <span className='span_contactForm'> <i className=" icon_form"></i>Programas</span>
                                      {formErrors.programa && <p className="error-message">{formErrors.programa} </p>}
                                    </label>
                                  </div>
                                  <div className="item_contactForm">
                                    <label className="label_contactForm">
                                      <select
                                        id="departamento"
                                        name="departamento"
                                        value={formData.departamento}
                                        onChange={handleChange}
                                        className="input_contactForm"
                                        placeholder="Departamento"
                                        required
                                      >
                                        {departamentos.map((departamento, index) => (
                                          <option key={index} value={departamento}>
                                            {departamento}
                                          </option>
                                        ))}
                                      </select>
                                      <span className="span_contactForm">Departamento</span>
                                      {formData.departamento && <p className="error-message"> {formErrors.departamento} </p> }
                                    </label>
                                  </div>         
                                  <div className="item_contactForm">
                                      <textarea  
                                        name='message' 
                                        value={formData.message}
                                        onChange={handleChange} 
                                        className='input_contactForm_message' 
                                        placeholder="Mensaje" 
                                        rows="5" 
                                        cols="40"
                                        required>
                                      </textarea>
                                      {formErrors.message && <p className="error-message">{formErrors.message}</p>}
                                  </div>
                                  <button type="submit" className='btn btn-warning mx-auto' >¡Quiero estudiar ya!</button>
                                </form>
                                  {showSuccessMessage && (
                                    <div className='success-messageContact'>
                                      <p>{successMessage}</p>
                                      </div>
                                  )}
                            </div>
                        </div>
                        <div className="text_ContactForm col-lg-5">
                          {/* <h1>¡Hola futuros líderes y soñadores!</h1><br></br> */}
                          <h5>
                            Sabemos que puedes presentar dudas o inquietudes, estamos aquí para asistirte y ayudarte a encontrar el
                            <strong> ¡Horizonte de la felicidad!</strong>
                          </h5><br></br>
                          <h5>¡No dudes en contactarnos!</h5><br></br>
                          <h5>
                            O si prefieres comunícate con nosotros al 6017437270 Ext 170, 153, 123, 112 en Bogotá, también  puedes  escribirnos a nuestro
                            <a 
                              href="https://api.whatsapp.com/send?phone=573219208288&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20..." 
                              target="_blank"
                            > Whatsapp
                            </a> 
                          </h5><br></br>
                          <h5><strong>¡Bienvenido a la familia Horizontista!</strong>, donde tus preguntas encuentran respuestas y tus sueños despegan!</h5><br></br>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  };

  export default ContactoForm;