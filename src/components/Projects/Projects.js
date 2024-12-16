import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/terusterang.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/ayokok.png";
import chatify from "../../Assets/Projects/filk.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/tokobuku.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FILKENYANG"
              description=" Solusi yang membantu mahasiswa FILKOM UB dalam memesan makanan di kantin dengan lebih efisien. Mengingat kendala yang sering dihadapi mahasiswa dalam antrian yang panjang, FILKENYANG dirancang untuk mempercepat proses pemesanan, sehingga mahasiswa dapat menikmati waktu istirahat mereka tanpa harus menghabiskan waktu lama menunggu. Dengan pendekatan yang inovatif, proyek ini berkomitmen untuk meningkatkan kenyamanan dan pengalaman kuliner mahasiswa di kampus."
              demoLink="https://drive.google.com/drive/folders/10zj6DARCrEpPHvafHQselM8bO4SJxF9y?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Poster Terus Terang"
              description="Proyek pembuatan poster dan banner untuk Cafe Terus Terang yang berlokasi di Semarang, saya bertanggung jawab untuk merancang visual yang menarik dan informatif. Desain tersebut bertujuan untuk menciptakan identitas yang kuat bagi cafe, menarik perhatian pelanggan, serta menyampaikan informasi mengenai menu dan suasana cafe. Dengan pendekatan yang kreatif dan profesional, poster dan banner ini dirancang untuk meningkatkan visibilitas Cafe Terus Terang dan mengundang pengunjung untuk menikmati pengalaman kuliner yang ditawarkan."
              demoLink="https://drive.google.com/drive/folders/1o-9q8kszusmShfEAXm2iTij5JqQgpx5U?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Toko Buku Arifa"
              description="Menciptakan platform yang memudahkan pengguna dalam membeli buku secara online. Website ini dirancang dengan antarmuka yang ramah pengguna, memungkinkan pengunjung untuk menelusuri koleksi buku dengan mudah, melakukan pemesanan, dan mendapatkan informasi terkini mengenai promo dan event. Dengan fokus pada kemudahan akses dan pengalaman berbelanja yang menyenangkan, Toko Buku Arifa bertujuan untuk memenuhi kebutuhan pencinta buku di seluruh masyarakat."
              demoLink="https://drive.google.com/drive/folders/1g9aqnxgZXpIKjV8BPVYXIZmVd39LEXfl?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Let's Cook"
              description="Pada projek ini saya bertanggung jawab untuk menyusun dan menyajikan resep masakan yang mudah dan lezat, membantu pengguna yang mencari inspirasi dalam memasak.
              Proyek ini dirancang untuk memberikan panduan praktis dan menarik, memastikan bahwa pengalaman memasak menjadi lebih sederhana dan menyenangkan. Dengan fokus pada kualitas dan kemudahan."
              demoLink="https://drive.google.com/drive/folders/1E9ieCMsQih-JrPQIrvHH9zIaSfL8L87Z?usp=sharing"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Social Media BEM FILKOM UB Maintenance"
              description="Sebagai penanggung jawab Social Media BEM FILKOM UB 2024, saya mengelola seluruh platform media sosial organisasi dengan fokus pada strategi konten yang meningkatkan visibilitas dan keterlibatan audiens. Melalui kolaborasi dengan tim kreatif, saya memastikan setiap konten diproduksi dengan standar profesional yang tinggi, merepresentasikan citra BEM FILKOM UB secara konsisten, dan responsif terhadap tren digital terkini."
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Value Magazine and Company Profile BEM FILKOM UB 2024"
              description="Sebagai supervisor Value Magazine dan Company Profile BEM FILKOM UB 2024, saya mengawasi proses produksi dan penyuntingan publikasi, memastikan konten berkualitas tinggi dan relevan dengan visi organisasi. Melalui koordinasi yang efektif dengan tim editorial dan desain, saya menjaga konsistensi informasi dan memenuhi tenggat waktu, sekaligus memperkuat pemahaman saya tentang pentingnya komunikasi dalam menyampaikan nilai-nilai BEM FILKOM UB."
              demoLink="https://blogs.soumya-jit.tech/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
