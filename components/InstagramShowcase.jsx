import { useState } from 'react'
import { Instagram, Play, X, ExternalLink } from 'lucide-react'

const InstagramShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState(null)

  const videos = [
    {
      id: 1,
      videoPath: '/videos/vid1.mp4',
      title: 'Conseils de santé dentaire',
      description: 'Découvrez les techniques de brossage efficaces'
    },
    {
      id: 2,
      videoPath: '/videos/vid2.mp4',
      title: 'Prévention dentaire',
      description: 'Comment maintenir des dents saines au quotidien'
    },
    {
      id: 3,
      videoPath: '/videos/vid3.mp4',
      title: 'Soins esthétiques',
      description: 'Les secrets d\'un sourire éclatant'
    },
    {
      id: 4,
      videoPath: '/videos/vid4.mp4',
      title: 'Questions fréquentes',
      description: 'Dr. Hiba répond à vos préoccupations'
    }
  ]

  const handleVideoClick = (videoId) => {
    setPlayingVideo(videoId)
  }

  const closeVideo = () => {
    setPlayingVideo(null)
  }

  return (
    <>
      <section id="instagram" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full">
              <Instagram className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-600">Conseils sur Instagram</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Conseils pour votre sourire
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Suivez Dr. Hiba sur Instagram pour des conseils de santé dentaire, 
              des astuces de prévention et bien plus encore.
            </p>
            
            {/* Instagram Profile Link */}
            <div className="pt-4">
              <a
                href="https://www.instagram.com/pristine_dental_center/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@pristine_dental_center</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => handleVideoClick(video.id)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-[9/16] bg-gray-100">
                  <video
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    <source src={video.videoPath} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ne manquez aucun conseil !
              </h3>
              <p className="text-gray-600 mb-6">
                Suivez Dr. Hiba sur Instagram pour découvrir quotidiennement des conseils 
                professionnels pour maintenir votre santé bucco-dentaire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.instagram.com/pristine_dental_center/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Suivre sur Instagram</span>
                </a>
                <button className="bg-blue-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors">
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-sm w-full">
            {/* Close Button - More Visible */}
            <button
              onClick={closeVideo}
              className="absolute -top-16 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-20 shadow-lg"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Alternative Close Button - Top Left */}
            <button
              onClick={closeVideo}
              className="absolute -top-16 left-0 text-white hover:text-gray-300 transition-colors z-20 text-lg font-medium"
            >
              ← Fermer
            </button>
            
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden aspect-[9/16]">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                preload="metadata"
              >
                <source src={videos.find(v => v.id === playingVideo)?.videoPath} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
            
            {/* Video Info */}
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {videos.find(v => v.id === playingVideo)?.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {videos.find(v => v.id === playingVideo)?.description}
                  </p>
                </div>
                <button
                  onClick={closeVideo}
                  className="ml-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Click Outside to Close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeVideo}
          ></div>
        </div>
      )}
    </>
  )
}

export default InstagramShowcase