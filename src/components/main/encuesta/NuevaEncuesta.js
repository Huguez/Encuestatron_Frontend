import React, { useState, useEffect } from "react";
import Modal from 'react-modal'
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/ui";
import { clearShowEncuesta, startCreateEncuesta } from '../../../actions/encuesta'


const customStyles = {
  content: {
    top: '45%',
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

const initialSurvey = {
    title: '',
    descripcion: '',
}
export const NuevaEncuesta = () => {

    const dispatch = useDispatch()
    const { openModal } = useSelector( state => state.ui )
    const { show } = useSelector( state => state.survey )

    const [ formValues, setFormValues ] = useState( initialSurvey )
    const { title, descripcion } = formValues
    
    ///------------------------------------------------------------
    const [ opcionesArray, setOpcionesArray ] = useState( [] )
    const [ opciones, setOpciones ] = useState( { op: '' } )
    const { op } = opciones;

    ///------------------------------------------------------------
    const [ { radio }, setRadioOption ] = useState( { radio: '' } )

    useEffect(() => {
        
        if( show ) {
            setFormValues( { title: show.titulo, descripcion: show.descripcion } )
            setOpcionesArray( show.opciones )
            setRadioOption( { radio: show.abierta ? 'abierta' : 'cerrada' } )
        }else{
            setFormValues( initialSurvey )
            setOpcionesArray( [] )
            setRadioOption( { radio: '' } )
        }

    }, [ show, setFormValues, setOpcionesArray ] )

    const handleRadio = ( { target } ) => {
        setRadioOption( {
            radio: target.id
        } )
    }

    const handleInputChange = ( { target } ) => {
        setFormValues( {
            ...formValues,
            [target.name]: target.value
        } )
    }

    const handleAgrear = ( e ) => {
        
        if( opcionesArray.length > 0 ){
            let flag = false
            for( let i = 0; i < opcionesArray.length; i++ ){
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
        const itemDElete = opcionesArray[i]
        const aux = opcionesArray.filter( item => item !== itemDElete )
        setOpcionesArray( aux )
        
    }

    const handleCloseModal = () => {
        setOpcionesArray([])
        setFormValues(initialSurvey)
        if ( show ) {
            dispatch( clearShowEncuesta() )
        }
        dispatch( closeModal() )
    }

    const isValid = () => ( ( title === '' || descripcion === '' || opcionesArray.length <= 1 ) && radio === 'cerrada' )
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const aux = opcionesArray.toString()
        if( show ){
            dispatch( startCreateEncuesta( title, descripcion, aux, radio, true, show.id, true ) )
        }else{
            dispatch( startCreateEncuesta( title, descripcion, aux, radio ) )
        }
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
            <div className="m-3 z-1 " style={{  maxHeight: '500px',  width: '500px' }}>
                
                <div className="d-flex justify-content-between">
                    <h2> Nueva Encuesta { show && <span className="h6">( Segunda Ronda )</span> } </h2> 
                    <button type="button" className="btn-close" arial-label="Close" onClick={ handleCloseModal }>
                    </button>
                </div>

                <form onSubmit={ handleSubmit } >
                    <div className="mt-3 row">
                        <div className="col-sm-12">
                            <input value={ title } onChange={ handleInputChange } name="title" type="text" className="form-control" placeholder="Titulo de la encuesta" id="statictitulo" />
                        </div>
                    </div>

                    <div className="mt-3 row">
                        <div className="col-sm-12">
                            <textarea  value={ descripcion } onChange={ handleInputChange } name="descripcion" className="form-control" placeholder="Descripcion de la Encuesta" id="floatingTextarea"></textarea>     
                        </div>
                    </div>

                    <div className="mt-3 row">
                        <div className="col-5">
                            <input value={ radio } onChange={ handleRadio }  name="radioOption" className="form-check-input mx-2" type="radio"  id="abierta" />
                            <label className="form-label" htmlFor="abierta">
                                Abierta
                            </label>
                        </div>
                        <div className="col-5">
                            <input value={ radio } onChange={ handleRadio } className="form-check-input mx-2" type="radio" name="radioOption" id="cerrada"  checked/>
                            <label className="form-label" htmlFor="cerrada">
                                Cerrada
                            </label>
                        </div>
                    </div>
                    
                    <div className="mt-3 row">
                        <div className="col-sm-9">
                            <input type="text" name="op" onChange={ handleOp } value={ op } className="form-control" placeholder="Agrege una opcion a la encuesta" id="statictitulo"  />
                        </div>
                        <div className="col-sm-2 m-auto">
                            <button type="button" disabled={ op === '' }  onClick={ handleAgrear } className="btn btn-primary" > Agregar </button>
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