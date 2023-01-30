const data = {
   "buttons": {
      "default":{
         "html": `
          <div>
            <button class='tw-btn'>Enviar</button>
            <button class="tw-btn tw-btn-gray">Enviar</button>
          </div>
          `,
         "css": `
            .tw-btn {
               background-color: #1e88e5;
               color: #fff;
               border: none;
               padding: 10px 20px;
            }
            .tw-btn-gray {
               background-color: #e0e0e0;
               color: #000;
            }
         `
      },
      "defaultGray":{
         "html": ""
      },
      "disabled":{
         "html": `
            <button class='tw-btn tw-disabled'>Enviar</button>
         `
      },
   }
}

export default data