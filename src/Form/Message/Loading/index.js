import { Text, LoadingContainer, Circle, Animation } from "../styled";

const Loading = () => (
    <>
                    <LoadingContainer>
                        <Circle>
                            <Animation circle1></Animation>
                            <Animation circle2></Animation>
                            <Animation circle3></Animation>
                            <Animation circle4></Animation>
                            <Animation circle5></Animation>
                            <Animation circle6></Animation>
                            <Animation circle7></Animation>
                            <Animation circle8></Animation>
                            <Animation circle9></Animation>
                            <Animation circle10></Animation>
                            <Animation circle11></Animation>
                            <Animation circle12></Animation>
                        </Circle>
                        <Text>
                            Strona jest w trakcie pobierania danych z Europiejskiego Banku Centralnego. Prośba o chwilę cierpliwości :)
                        </Text>
                    </LoadingContainer>
                </>
);

export default Loading;