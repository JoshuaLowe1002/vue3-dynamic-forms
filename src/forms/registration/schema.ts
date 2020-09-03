import Input from '../../components/Input.vue'
import Select from '../../components/Select.vue'
import { packLogic, palletLogic } from './logic'

const submit = () => { 
    alert("Form submitted!")
}

const schema = { 
    title: "Add Product",
    fields: [
      {type: "Text", name: "description", label: "Description", placeholder: "Product Description", component: Input},
      {type: "Text", name: "sku", label: "SKU", placeholder: "Enter SKU", component: Input},
      {type: "Text", name: "barcode", label: "Barcode", placeholder: "Enter Barcode", component: Input},

      {type: "select", name: "unit", label: "Unit Size", component: Select, options: [{id: "1", title:"Single"}, {id: "2", title:"Pack"}, {id: "3", title:"Pallet"}]},
      {type: "Number", name: "packSize", label: "Pack Size", placeholder: "0", component: Input, logic:packLogic},
      {type: "Number", name: "palletSize", label: "Pallet Size", placeholder: "0", component: Input, logic:palletLogic},
      
      {type: "Number", name: "weight", label: "Weight", placeholder: "0", component: Input},
      {type: "Number", name: "height", label: "Height", placeholder: "0", component: Input},
      {type: "Number", name: "width", label: "Width", placeholder: "0", component: Input},
      {type: "Number", name: "depth", label: "Depth", placeholder: "0", component: Input},
    ],
    submitFunction: submit
}

export {
  schema, submit
}