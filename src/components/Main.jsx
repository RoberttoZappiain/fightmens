import React, { useState } from 'react'
import videoBg from '../assets/sword.mp4'
import { Carousel, Accordion, Card, Table, Checkbox, Label, Button, Modal, TextInput } from 'flowbite-react'
import enemy1 from '../assets/orc.png'
import enemy2 from '../assets/Silver.png'
import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'
import Push from 'push-js';

const Main =  () => {
  const [showModal, setShowModal] = useState(false);
  
  const push = new Push(); // All arguments are optional
  push.subscribe().then(subscription => {});
  push.unsubscribe().then(() => {});
  return (
    
      <div className='main '>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content ">

          <h5 className="mb-2 mt-sa text-3xl font-light text-gray-50 dark:text-white">
            Disponible ahora
          </h5>
          <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
            Registrate para acceder y descargar ya mismo</p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
            >

              <div className="text-center">

                <div className="ml-3 font-sans text-sm font-semibold" >
                  <button type="button"
                    onClick={() => setShowModal(true)}>
                    Descargar
                  </button>

                </div>

              </div>
            </a>
          </div>
          

          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 m-5">
            <a
              href="https://www.instagram.com/fighting_x_mens_oficial/"
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-50 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" /></svg>             <div className="text-center">



              </div>
            </a>
          </div>
        </div>



        <div className=" container mx-auto px-4 bg-black">
          <div className="h-56 mx-24 sm:h-64 xl:h-80 2xl:h-96 ">
            <p class="text-5xl text-gray-50 p-11">Enemigos y Personajes</p>
            <Carousel>
              <img
                src="https://static.wikia.nocookie.net/0460335d-86e2-4c7f-88ff-4522e331b752/scale-to-width/755"
                alt="..."
              />

            </Carousel>
          </div>
          <p class="text-5xl text-gray-50 p-11 mt-28 ml-24">Enemigos</p>
          <div class="flex flex-nowrap bg-black">


            <div className=' mt-3 ml-24'>
              <div className="max-w-sm">
                <Card imgSrc={enemy1}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Orco               </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Dificultad: Facil                 </p> <br />
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Ataque Final: No Asignado                 </p>
                </Card>
              </div>
            </div>
            <div className=' mt-3 ml-24'>
              <div className="max-w-sm">
                <Card imgSrc={enemy2} >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Silver               </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Dificultad: Media                 </p> <br />
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Ataque Final: No Asignado                 </p>
                </Card>
              </div>
            </div>
          </div>
          <p class="text-5xl text-gray-50 p-11 mt-5 ml-24">Personajes</p>
          <div class="flex flex-nowrap bg-black">


            <div className=' ml-24'>
              <div className="max-w-sm">
                <Card imgSrc={player1}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Desconocido               </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Dificultad: Normal                 </p> <br />
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Ataque Final: Triple Ataque               </p>
                </Card>
              </div>
            </div>
            <div className='  ml-24'>
              <div className="max-w-sm">
                <Card imgSrc={player2} >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Desconocido               </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Dificultad: Normal                 </p> <br />
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Ataque Final: Doble Patada               </p>
                </Card>
              </div>
            </div>
          </div>
          <div className='mx-24 mt-11'>
            <Accordion flush={true}>
              <Accordion.Panel>
                <Accordion.Title>
                  <h1 className='text-gray-50 text-3xl font-light'> Preguntas Frecuentes</h1>
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Seccion de preguntas y respuestas y soporte
                  </p>

                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Requisitos
                </Accordion.Title>
                <Accordion.Content>
                  <Table>
                    <Table.Head>
                      <Table.HeadCell>

                      </Table.HeadCell>
                      <Table.HeadCell>
                        Requisitos mínimos:
                      </Table.HeadCell>
                      <Table.HeadCell>
                        Requisitos recomendados:
                      </Table.HeadCell>


                    </Table.Head>
                    <Table.Body className="divide-y">
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          CPU      </Table.Cell>
                        <Table.Cell>
                          Intel Core i3-3210 3.2 GHz/ AMD A8-7600 APU 3.1 GHz o equivalente
                        </Table.Cell>
                        <Table.Cell>
                          Intel Core i5-4690 3.5GHz / AMD A10-7800 APU 3.5 GHz o equivalente

                        </Table.Cell>


                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          GPU (integrado)	      </Table.Cell>
                        <Table.Cell>
                          Serie Nvidia GeForce 400 o serie AMD Radeon HD 7000 con OpenGL 4.4
                        </Table.Cell>
                        <Table.Cell>
                          Serie GeForce 700 o serie AMD Radeon Rx 200 (excepto conjuntos de chips integrados) con OpenGL 4.5
                        </Table.Cell>

                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          RAM	      </Table.Cell>
                        <Table.Cell>
                          4 GB
                        </Table.Cell>
                        <Table.Cell>
                          8 GB

                        </Table.Cell>

                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          SO	      </Table.Cell>
                        <Table.Cell>
                          Como mínimo 1 GB para núcleo del juego, mapas y otros archivos
                        </Table.Cell>
                        <Table.Cell>
                          4 GB (se recomienda SSD)
                        </Table.Cell>

                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Lanzamiento
                </Accordion.Title>
                <Accordion.Content>
                  <p className='text-white'>02/12/2022</p>

                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>


        </div>


      </div>
    


  )
}

export default Main