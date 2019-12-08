import styled from "@emotion/styled";

const Box = styled.div(
  {
    display: "flex"
  },
  props => {
    const {
      margin,
      flexDirection,
      marginBottom,
      marginTop,
      justifyContent,
      alignItems
    } = props;

    return {
      margin,
      flexDirection,
      marginBottom,
      marginTop,
      justifyContent,
      alignItems
    };
  }
);

export default Box;
