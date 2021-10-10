import React, { useState } from "react";
import Modal from 'react-modal'
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/ui";
import { useForm } from "../../../hooks/useForm";

// import PropTypes from 'prop-types';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '95%'
  },
};

if( process.env.NODE_ENV !== 'test' ){
    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#root');
}

export const NuevaEncuesta = () => {

    const dispatch = useDispatch()
    const { openModal } = useSelector( state => state.ui )
    const [ formValues, setFormValues, reset ] = useForm( {
        title: '',
        descripcion: '',
    } )
    const { title, descripcion } = formValues

    ///-----------------------------------------------------
    const [ opcionesArray, setOpcionesArray ] = useState( [] )
    const [ opciones, setOpciones ] = useState( { op: '' } )
    const { op } = opciones;
    
    const handleAgrear = ( e ) => {
        
        if( opcionesArray.length > 0 ){
            let flag = false
            for (let i = 0; i < opcionesArray.length; i++) {
                const element = opcionesArray[i];
                if ( element === op ) {
                    flag = true
                }
            }
            
            if( !flag ){
                setOpcionesArray( s => [...s, op ] )
            }

        } else {
            setOpcionesArray( s => [...s, op ] )
        }

        setOpciones( { op: '' } )
    }

    const handleOp = ( { target } ) => {
        setOpciones( {
            ...opciones,
            [target.name]: target.value
        } )
    }
    ///-----------------------------------------------------
    
    const  hanldeDeleteOpcion = ( e, i ) =>{
        // console.log("delete op: ",  )
        const itemDElete = opcionesArray[i]
        const aux = opcionesArray.filter( item => item !== itemDElete )
        // console.log( aux )
        setOpcionesArray( aux )
        
    }

    const handleCloseModal = () => {
        setOpcionesArray([])
        reset()
        dispatch( closeModal() )
    }

    const isValid = ()=> {
        return ( title === '' || descripcion === '' || opcionesArray.length === 0 )
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const aux = opcionesArray.toString()
        console.log( title, descripcion, aux )
        // dispatch( *alg oque cree encuesta*() )
        handleCloseModal()
    }

    
    return (
        <Modal
            isOpen={ openModal }
            onAfterOpen={()=>{}}
            onRequestClose={ handleCloseModal }
            style={customStyles}
            contentLabel="New Survey Modal"
        >
            <div className="m-3" style={{  maxHeight: '500px',  width: '500px' }}>
                
                <div className="d-flex justify-content-between">
                    <h2> Nueva Encuesta </h2> 
                    <button type="button" className="btn-close" arial-label="Close" onClick={ handleCloseModal }>
                    </button>
                </div>

                <form onSubmit={ handleSubmit } >
                    <div className="mt-3 row">
                        <div className="col-sm-12">
                            <input value={ title } onChange={ setFormValues } name="title" type="text" className="form-control" placeholder="Titulo de la encuesta" id="statictitulo" />
                        </div>
                    </div>

                    <div className="mt-3 row">
                        <div className="col-sm-12">
                            <textarea  value={ descripcion } onChange={ setFormValues } name="descripcion" className="form-control" placeholder="Descripcion de la Encuesta" id="floatingTextarea"></textarea>     
                        </div>
                    </div>
                    
                    <div className="mt-3 row">
                        <div className="col-sm-9">
                            <input type="text" name="op" onChange={ handleOp } value={ op } className="form-control" placeholder="Agrege una opcion a la encuesta" id="statictitulo"  />
                        </div>
                        <div className="col-sm-2 m-auto">
                            <button type="button" disabled={ op === '' ? true : false }  onClick={ handleAgrear } className="btn btn-primary" > Agregar </button>
                        </div>
                    </div>

                    <div className="mt-3 row">
                        <div className="col-sm-12 m-auto">
                            <ol className="list-group list-group-flush">
                                
                                <li className="list-group-item">

                                    { opcionesArray.map( ( item, index ) => {
                                        return ( 
                                            <div  key={ index } className="p-1 d-flex justify-content-between">
                                                <p className="text-truncate col-form-label" >
                                                    { item }
                                                </p>
                                                <span className="btn btn-danger" onClick={ ( e ) => hanldeDeleteOpcion( e, index ) }>
                                                    <i className=" bi bi-trash-fill"></i>  
                                                </span>
                                            </div> 
                                        )
                                    } ) }
                                </li>

                            </ol>
                        </div>
                    </div>
                    
                    <br/>
                    <div className="m-3  row w-100 m-auto">
                        <button disabled={ isValid() } type="submit" className="btn btn-success" >Crear</button>
                    </div>
                    
                </form>
            </div>
        </Modal>
    );
}