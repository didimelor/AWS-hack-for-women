
import React,{Component, useState} from 'react';
import Amplify, { Storage } from 'aws-amplify'; 
import awsconfig from '../../aws-exports';
import './Viaje.css'
import Header from '../Header/Header.js'


Amplify.configure(awsconfig);


function getMyDate() {
  var today = new Date;
  let days = today.getDate();
  let months = today.getMonth() + 1;
  let years = today.getFullYear();

  const dd = years + "/" + months + "/" + days;
  return dd;
}

class InputImage extends Component{

    state = {
      // Initially, no file is selected
      selectedFile: null
    };
    
    // On file select (from the pop up)
    onFileChange = event => {
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
      let datePath = getMyDate()

      // Create an object of formData
      const formData = new FormData();
      formData.append("name", this.state.selectedFile?.name);
      formData.append("file", this.state.selectedFile);
    
      // Details of the uploaded file
        Storage.put(
         `images/${this.props.theUser.username}/${datePath}/${Date.now()}.jpg`,
          formData.get("file"),
          {
            level: "public",
            contentType: "image/jpg",
            progressCallback: (progress) => {
              console.log(progress);
            },
          }
        );
    };

    fileData = () => {
    
        if (this.state.selectedFile) {

          return (
            <div>
              <h2>File Details:</h2>
               <p>File Name: {this.state.selectedFile.name}</p>
               <p>File Type: {this.state.selectedFile.type}</p>
               <p>
                Last Modified:{" "}
              </p>
            </div>
          );
        } else {
          return (
            <div>
              <br />
              <h4>Por Favor elija una imagen antes de presionar el boton</h4>
            </div>
          );
        }
      };

      render() {
        return (
          <div>
            < Header />  
            <div className='uploadImgWrap'>     
              <h1>Sube Imagenes de tu recorrido</h1>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload()}>
                      Subir
                    </button>
                </div>

                <div class="cardGuia">
                <h3>Guia</h3>
                <p className="titulo">Te recomendamos que durante el trayecto subas fotos de: </p>

                <ul>
                    <li>Tu vestimenta para localizarte mas rapido en caso de emergencia</li>
                </ul>

                <p className="titulo"> Si viajas a pie &#128095; o en coche &#128663;:</p>
                <ul>
                    <li>Calquier persona/coche que sientas que te esta siguendo</li>
                </ul>

                <p className="titulo"> Si viajas a en taxi &#128661; subor fotos de:</p>
                <ul>
                    <li>Placas del taxi</li>
                    <li>Permiso/registro conductor</li>
                </ul>
            </div>

              {this.fileData()}
            </div>
            </div>
          );
      }
  }

  export default InputImage;
