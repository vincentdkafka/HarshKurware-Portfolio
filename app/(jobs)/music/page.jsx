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
      .then((data) => setAlbums(data.items || []));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-6 md:p-8 space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 text-center sm:text-left">
          My Spotify Dashboard
        </h1>
        <Link href="https://open.spotify.com/user/31ix7aup3m2rlgfa7swrgk5zbzku?si=cba611326f674fbe">
          <Button className="text-black text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 rounded-4xl bg-green-700 hover:bg-green-900 w-full sm:w-auto">
            View Spotify
          </Button>
        </Link>
      </div>

      {/* Top Tracks + Artists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-500 mb-4 text-center sm:text-left">
            Top Tracks
          </h2>
          <ul className="space-y-2 text-sm sm:text-base">
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

        <div className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-500 mb-4 text-center sm:text-left">
            Top Artists
          </h2>
          <ul className="space-y-2 text-sm sm:text-base">
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

      {/* Albums */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-red-500 mb-4 text-center sm:text-left">
          Saved Albums
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {albums.map((item) => {
            const album = item.album;
            return (
              <div
                key={album.id}
                className="bg-gray-800 rounded-md overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
              >
                {album.images?.[0]?.url ? (
                  <img
                    src={album.images[0].url}
                    alt={album.name}
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                ) : (
                  <div className="w-full h-32 sm:h-40 bg-gray-700 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div className="p-2 text-center font-medium text-sm sm:text-base truncate">
                  {album.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Music;
