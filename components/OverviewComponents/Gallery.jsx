import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'

function Gallery() {
  return (
    <div className='CountryGalleryContainer'>
    <div className="TitleContainer mt-5">
    <h1 className="font-bold text-2xl">Gallery</h1>
  </div>

        <div className='GridImagesContainer py-8 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 '>

          


        <div className="imageItem w-[200px] rounded-xl overflow-hidden">
  <AspectRatio ratio={16 / 9}>
    <img
      className="Image"
      src="https://s3-alpha-sig.figma.com/img/0c94/8122/bb8914030efc737220c74057fe640230?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=goZdXozYA2z84VkiYU4IvgJCK7Logd-kEy2QlsoHiBKwutYv2ECBSUdDAXLAeJNNk~6eyeIHEo3yfG7r72ltrGKR7C17-t2qluhmkKhtV9cujCz0wc0UnX34lWMDZ3oS8jFsD5BXMetz-rySkM164qx1jJ4YcpP9xOhCN15R-ojFoYs00p0pRELqAzG4fWtY4GOvBErGWYwdEPqVeUvrqBIxJvTSPICvSRYgHISLbHx8hlMgjLXFbk1VTdh7fGjBKPgHtXanCfb20PRRuaKKwsBH9I-PsslRLuAGgZtUOaWkUwrf5rtwqQtqoZ7jmZVhqXvsQZjnOLRYXZxA2jPy3g__"
      alt="Landscape photograph by Tobias Tullius"
    />
  </AspectRatio>
</div>


<div className="imageItem w-[200px] rounded-xl overflow-hidden">
  <AspectRatio ratio={16 / 9}>
    <img
      className="Image"
      src="https://s3-alpha-sig.figma.com/img/f2e9/154f/987ce84bdbc23a879f319be824f5a810?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aax7be9TEMEgErxYW8OqsmEpE7VMB9BEM6lX8FI4Lapqy2iXa8coHHTNjwm2cEx2hzXEnj3r~xeeoiPddtH5VNnLANSMNKYGl7LtsI4kHwAmddVfOcZ-kjEVsNQnWxzCYhziPP-FLdTyt2uJV32li5a9tUIK~QkJg5ZdWOPFEZvTC3JdZq79N7mLS58KVI-8HJpbNiVDYU~yGCC8KWVtIBDiBzm4GP5k1SUqdrnskOQIGXQcgHXcAttlMUif6fc7oegiV9GPaF0jnTv7k8fiVPaSgoPhxvaTDD3En564bhPYa6hUAE2iiLC9nW65AltPBUsdg03dlLPbRbFz9F-qIw__"
      alt="Landscape photograph by Tobias Tullius"
    />
  </AspectRatio>
</div>

<div className="imageItem w-[200px] rounded-xl overflow-hidden">
  <AspectRatio ratio={16 / 9}>
    <img
      className="Image"
      src="https://s3-alpha-sig.figma.com/img/e7b6/86f8/83edf9ccc6f7fe7cbc3043f5ea6c674d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HeGVvnngwukmekfK3tsExVycpP4QIbEjd0VmIZqAKJd0IoRjUb2dLzPabBNTD6raN~v~xt7lKHyjUAM8tY46COkCViRyuUraXXk20V2D7oKTgkFdziBAi3W3GjsktXyZF-94MEMd9iCEICtaSGlOOp6VPVj61SzhpAOiWjKHPhfSUHT-RQCiMwcPDdq7UbqMU6qCUL1a4NYF-owzQPheUC56ZDgP5gNINQTSnxm6um-BBeLD-V5yxCTG9do~2fMh8dfcT5EjDOuFMf8NnVxykZDMDVd2N0jrZ9xhGgXDwTsMsRA-idMzp0oLqk1CFuAt6e1wTyAeFz3L0MsQ6TiidQ__"
      alt="Landscape photograph by Tobias Tullius"
    />
  </AspectRatio>
</div>

<div className="imageItem w-[200px] rounded-xl overflow-hidden">
  <AspectRatio ratio={16 / 9}>
    <img
      className="Image"
      src="https://s3-alpha-sig.figma.com/img/e421/6ff5/b94e25db00aeef6e8acafbed9bc2fe32?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9ykoqvk6~5LRSqUhBJRS3ydm1tappYw3PMN8UPaaFkaAx0h59EKZTgMU4VoJgf9fSvOtLEeXtXkit7otf0TVTzUGvTzPuOMO9eYxk8gXG40W4aw0cpygvGETAIyCETR5LbOouk993XiNDEyHM6HVnk~NXNFiSkaAfoJ7dwKySLTijOHdF6-4DkVq~mrQPoyYf7~iiahDX~2VVpaRHL2IdUpkWyE-DB338jKluVfDl1DbL-LTJ2Dm~ZcaHZxysaphMq2DfyyrtRbkTcrD5HUBmmN1PUtUSNt4BHME96dph7K95K9AFPr~3fTKs295P5zOHmGFl6PKxzbvyw2pdrV3A__"
      alt="Landscape photograph by Tobias Tullius"
    />
  </AspectRatio>
</div>


<div className="imageItem w-[200px] rounded-xl overflow-hidden">
  <AspectRatio ratio={16 / 9}>
    <img
      className="Image"
      src="https://s3-alpha-sig.figma.com/img/7fd6/72e5/5b2bede58341cc1a916e05ca3f3cba9c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p73HQW~Bdx65uUF0TVShIALFBxFJMpRM7UItZKTQaG4aTcF7EU48mWRh-QjL~lRPECiWvsX8qNZqHFV0~3qAQvyejUXI3AVCbXS3H80lJjAt5OJ95gCVUzEXunGQIGKBCKUAPsmhfXYd2cAt0QfAjZkPz2MUKXznrfFBZa~Asf~bPoKgD02ME9qI71KLeKkZ9DK-TTqJrj856ihN5-zPKaJoFCnjMC1sxzSL00K29Rdwx5Y4a-Q6CIOL5vpAkBNDXskJjbIb~AZx2a68QN4QGqY~XmHAIHF38ZPslbsCtLBcoy~jF-EUTNvAWnFBjpAPdx2bXjO6N3TWoreyWPokCw__"
      alt="Landscape photograph by Tobias Tullius"
    />
  </AspectRatio>
</div>


        </div>




    </div>
  )
}

export default Gallery