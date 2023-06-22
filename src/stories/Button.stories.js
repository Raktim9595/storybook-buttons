import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = args => <Button {...args} />

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Primary.args = {
  variant: "primary",
  inverted: false,
  size: "medium",
  fullWidth: false,
  label: "Button",
  icon: false,
  iconPosition: "before",
  iconOnly: false,
  disabled: false,
}
Secondary.args = {
  variant: "secondary",
  inverted: false,
  size: "medium",
  fullWidth: false,
  label: "Button",
  icon: "",
  iconPosition: "before",
  iconOnly: false,
  disabled: false,
}
Tertiary.args = {
  variant: "tertiary",
  inverted: false,
  size: "medium",
  fullWidth: false,
  label: "Button",
  icon: "",
  iconPosition: "before",
  iconOnly: false,
  disabled: false,
}