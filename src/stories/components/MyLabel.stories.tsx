import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';


export default {
  title: 'UI/Labels/MyLabel',
  component: MyLabel,
  argTypes: { //Esto es opcional es para modificar como muestra los argumentos en storyBook
    size: { control: 'select' },//Ejemplo cambiamos de checklist a select, para mas info en la documentación
    color: { control: 'select' }
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />

export const Basic = Template.bind({});
Basic.args = {
  label: 'Basic Label',
  size: 'normal',
  color: 'primary',
  allCaps: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'AllCaps Label',
  size: 'normal',
  color: 'primary',
  allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Label',
  size: 'normal',
  color: 'secondary',
  allCaps: false,
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Label',
  size: 'normal',
  color: 'tertiary',
  allCaps: false,
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: 'Custom Color Label',
  size: 'h1',
  allCaps: false,
  fontColor: '#63e017'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  label: 'Custom Color Label',
  size: 'h1',
  allCaps: false,
  fontColor: 'white',
  backgroundColor: 'black'
}