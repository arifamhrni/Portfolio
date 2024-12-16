import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo semuanya!!, aku <span className="purple">Arifa Maharani Salsabil </span>
            asal <span className="purple"> Bekasi, Indonesia.</span>
            <br />
            Mahasiswa semester 5 jurusan Teknologi Informasi di Fakultas Ilmu Komputer, Universitas Brawijaya.
            <br />
            Saat ini, aku aktif dalam organisasi <span className="purple"> BEM FILKOM UB 2024.</span>sebagai <span className="purple"> Wakil Kepala Biro Media Informasi dan Kreatif.</span>
            <br />
            Aku tertarik banget sama desain grafis, full stack developer, dan data science!! dan aku suka banget belajar tentang IT!
            <br />
            <br />
            Selain menyukai tentang teknologi, beberapa aktifitas yang aku suka!!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Suka belajar bahasa baru😝
            </li>
            <li className="about-activity">
              <ImPointRight /> Menonton film🤩
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogging🏃
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">arifamhrni</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
