"use client";
import Image from "next/image";
import React from "react";

const books = {
  current: [
    {
      title: "Kafka on the Shore",
      author: "Haruki Murakami",
      cover: "/books/kafka.jpg",
      link: "https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore",
    },
    {
      title: "Yayati",
      author: "Vishnu Khandekar",
      cover: "/books/yayati.jpg",
      link: "https://www.goodreads.com/book/show/7607918-yayati",
    },
  ],
  favorites: [
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      cover: "/books/davinci.jpg",
      link: "https://www.goodreads.com/book/show/968.The_Da_Vinci_Code",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      cover: "/books/crime.jpg",
      link: "https://www.goodreads.com/book/show/7144.Crime_and_Punishment",
    },
    {
      title: "Metamorphosis",
      author: "Franz Kafka",
      cover: "/books/metamorphosis.jpg",
      link: "https://www.goodreads.com/book/show/485894.The_Metamorphosis",
    },
  ],
  completed: [
    {
      title: "Inferno",
      author: "Dan Brown",
      cover: "/books/inferno.jpg",
      link: "https://www.goodreads.com/book/show/17212231-inferno",
    },
    {
      title: "Norwegian Wood",
      author: "Haruki Murakami",
      cover: "/books/norwegian.jpg",
      link: "https://www.goodreads.com/book/show/11297.Norwegian_Wood",
    },
  ],
};

const Reads = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-16">
      {/* Hero */}
      <h1 className="text-4xl text-[#ED1C24] md:text-5xl font-bold text-center mb-4">
        📚 My Reads
      </h1>
      <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-12">
        A curated collection of books I’m reading, re-reading, and have
        finished. Each page I turn fuels my creativity and perspective.
      </p>

      {/* Currently Reading */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#E31C24]">
          Currently Reading
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.current.map((book, idx) => (
            <a
              key={idx}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 border border-[#E31C24]/40 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-red-600/30 transition flex flex-col"
            >
              <Image
                src={book.cover}
                alt={book.title}
                width={100}
                height={100}
                className="object-contain w-full h-72"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-neutral-400">{book.author}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Favorites */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Favorite Books</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {books.favorites.map((book, idx) => (
            <a
              key={idx}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:border-[#E31C24] transition flex flex-col"
            >
              <Image
                src={book.cover}
                alt={book.title}
                width={300}
                height={400}
                className="object-contain w-full h-72"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-neutral-400">{book.author}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Completed */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Completed Reads</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {books.completed.map((book, idx) => (
            <a
              key={idx}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:scale-105 hover:border-[#E31C24] transition flex items-center gap-4"
            >
              <Image
                src={book.cover}
                alt={book.title}
                width={80}
                height={120}
                className="object-cover rounded"
              />
              <div>
                <h3 className="text-md font-semibold">{book.title}</h3>
                <p className="text-xs text-neutral-400">{book.author}</p>
              </div>
            </a>
          ))}
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 flex items-center justify-center hover:scale-105 hover:border-[#E31C24] transition h-36 md:h-40">
            <h3 className="text-lg font-semibold text-center text-neutral-400">
              …and many more
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reads;
