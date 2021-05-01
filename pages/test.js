import Paragraph from "../components/atoms/paragraph";


export default function test() {
    return <>
        <Paragraph value="Patrick Armando"
            size="24px"
            variant="small-caps"
            family="Arial, Helvetica, sans-serif"
        />;
        <Paragraph value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla sem tortor, ut gravida velit efficitur in. Phasellus finibus, turpis eu suscipit varius, quam erat suscipit sapien, eget ultricies mi nunc id nunc. Quisque varius eu turpis vel egestas. Pellentesque placerat purus felis, id ornare tortor vestibulum ut. Ut aliquam bibendum volutpat. In accumsan dictum pellentesque. Cras ultrices scelerisque nibh vel rhoncus. Etiam nec magna vitae felis hendrerit porttitor ut pretium orci."
            size="16px"
            padding="0px 200px 0px 200px"
            align="justify" />
    </>
}
