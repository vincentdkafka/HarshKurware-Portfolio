"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Music = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("/api/spotify/top-tracks")
      .then((res) => res.json())
      .then((data) => setTopTracks(data.items || []));

    fetch("/api/spotify/top-artists")
      .then((res) => res.json())
      .then((data) => setTopArtists(data.items || []));

    fetch("/api/spotify/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.items || []);
      });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-8 space-y-12">
      <div className="flex justify-between">
        {" "}
        <h1 className="text-4xl font-bold text-red-600 mb-8">
          My Spotify Dashboard
        </h1>
        <Link href="https://open.spotify.com/user/31ix7aup3m2rlgfa7swrgk5zbzku?si=cba611326f674fbe">
          {" "}
          <Button className="text-black text-xl px-8 py-6 rounded-4xl bg-green-700 mb-6 hover:bg-green-900">
            View Spotify
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Top Tracks
          </h2>
          <ul className="space-y-2">
            {topTracks.map((t) => (
              <li
                key={t.id}
                className="hover:text-red-400 transition-colors duration-200"
              >
                {t.name} — {t.artists.map((a) => a.name).join(", ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Top Artists
          </h2>
          <ul className="space-y-2">
            {topArtists.map((a) => (
              <li
                key={a.id}
                className="hover:text-red-400 transition-colors duration-200"
              >
                {a.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">
          Saved Albums
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {albums.map((item) => {
            const album = item.album;
            return (
              <div
                key={album.id}
                className="bg-gray-800 w-48 rounded-md overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
              >
                {album.images?.[0]?.url ? (
                  <img
                    src={album.images[0].url}
                    alt={album.name}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-700 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div className="p-2 text-center font-medium">{album.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Music;
