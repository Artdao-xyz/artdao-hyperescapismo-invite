<script>
    // create a simple three.js sketch on svelte page

    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import '/src/style.css';

    let renderer, scene, camera, cube1, cube2, cube3;
    let canvas;

    let loaded = false;

    onMount(() => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);

        renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        renderer.setClearColor(0xcccccc, 1);

        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x0088ff });
        cube1 = new THREE.Mesh(geometry, material);
        cube1.position.y = 0;
        cube1.scale.set(2, 2, 2);
        scene.add(cube1);

        camera.position.z = 20;

        function render() {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

        render();

        window.onresize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        loaded = true;

        return () => {
            canvas.remove();
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    });
</script>

<canvas bind:this={canvas}></canvas>

{#if loaded}
    <h1 class="absolute top-0 left-1/2 -translate-x-1/2 text-4xl lp:text-8xl select-none mt-16">HyperEscapismo</h1>

    <div class="select-none absolute bottom-0 left-1/2 -translate-x-1/2 text-center mb-3 lp:mb-6">
        <h1 class="uppercase text-2xl lp:text-5xl">invitee</h1>
        <p class="text-sm lp:text-lg my-2 lp:my-4 tracking-[3px]">scroll to begin</p>
        <img class="mx-auto scale-75 lp:scale-100" src="/arrow.svg" alt="Scroll to begin">
    </div>

    <div class="lp:text-xl text-center lp:w-1/2 mx-4 lp:mx-auto tracking-wider leading-8">
        <h1 class="uppercase text-3xl lp:text-5xl text-center mt-12 mb-8 lp:mt-32 lp:mb-16" >drop</h1>
        <div>
            <p>
                O ArtDAO tem trabalhado nos últimos meses em nossa própria infraestrutura de mercado na plataforma Fuel, uma nova Layer-2 que se expande a partir do Ethereum. Acreditamos que isso oferece uma nova e poderosa oportunidade para ampliar as possibilidades da arte digital no Ethereum - conectando novas pessoas aos artistas e criando um novo tipo de mercado construído por e para os artistas e suas comunidades.
            </p>
            <br>
            <p>
                Para fazer isso, estamos reunindo uma nova série de lançamentos curados, lançando novas obras 1/1 junto com uma revista online, um conceito de curadoria e uma exposição física.
            </p>
            <br>
            <p>
                Para o Hyperescapismo, estamos trabalhando com Femzor & Occulted para explorar a ideia de escapismo, examinando como formas transversais de tecnologia digital estão presas entre a possibilidade de sublimação de nossas imaginações nas campanhas de marketing corporativo e, por outro lado, como meio de digressão, subterfúgio e criação: uma reimaginação do possível.
            </p>
            <br>
            <p class=" text-red-500 ">
                Gostaríamos de convidá-lo a criar uma edição limitada conosco, ao lado de outros 20 artistas selecionados pelos curadores.
            </p>
        </div>

        <h1 class="uppercase text-3xl lp:text-5xl text-center mt-12 mb-8 lp:mt-32 lp:mb-16" >exhibition</h1>

        <div>
            <p>
                Para lançar o lançamento e a revista online, estaremos realizando uma exposição temporária em São Paulo no 2024.
            </p>
            <br>
            <p>
                Estamos trabalhando com Femzor & Occulted para transformar um espaço em uma contraparte física temporária do mundo online do Hyperescapismo.
            </p>
        </div>

        <div class="my-14">
            <img src="/banner.png" alt="Banner">
        </div>
        
        <p class="text-xs lp:text-base uppercase underline text-red-500">full terms & conditions</p>
        
        <div class="text-xs lp:text-lg font-semibold border-[1px] my-10 lp:my-20 shadow-md rounded-md uppercase px-14 py-2 w-fit mx-auto border-black">
            <a href={"#"}>join us</a>
        </div>
    </div>
{/if}