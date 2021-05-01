import AtomText from "../components/atoms/Text"
import AtomButton from "../components/atoms/Button"

export default function test() {
    return (
        <>
            <AtomText value="Patrick Armando"
                size="24px"
                variant="small-caps"
                family="Arial, Helvetica, sans-serif"
                weight="700"
                padding="0px 200px 0px 200px"
                margin="20px 0px 0px 0px"
            />;
            <AtomText value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla sem tortor, ut gravida velit efficitur in. Phasellus finibus, turpis eu suscipit varius, quam erat suscipit sapien, eget ultricies mi nunc id nunc. Quisque varius eu turpis vel egestas. Pellentesque placerat purus felis, id ornare tortor vestibulum ut. Ut aliquam bibendum volutpat. In accumsan dictum pellentesque. Cras ultrices scelerisque nibh vel rhoncus. Etiam nec magna vitae felis hendrerit porttitor ut pretium orci."
                size="16px"
                padding="0px 200px 0px 200px"
                align="justify"
                margin="-10px 0px 0px 0px"
            />
            <AtomButton value="Read More"
                background="blue"
                border="none"
                padding="10px 20px"
                margin="20px 0px 0px 200px"
                color="white"
                radius="10px"
            />
        </>
    );
}
