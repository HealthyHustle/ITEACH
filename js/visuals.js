/**
 * DETEKTIF KEBAIKAN - 3D CARTOON VISUALS ENGINE
 * Structured, proportional 3D Cartoon assets (zero flat geometric shapes)
 */

const Visuals = {
  /**
   * Returns proportional 3D Dodo Mascot markup
   * @param {string} expression - 'happy', 'curious', 'thinking', 'excited', 'celebrating', 'talking'
   * @param {string} sizeClass - CSS sizing modifier ('cover', 'panel', 'quiz', 'closing')
   */
  getDodoSVG(expression = 'happy', sizeClass = 'panel') {
    let imgFile = 'dodo_welcome.png';
    let altText = 'Dodo si Burung Detektif Cilik tersenyum ramah';
    let animClass = 'dodo-anim-float';

    if (expression === 'thinking') {
      imgFile = 'dodo_thinking.png';
      altText = 'Dodo sedang berpikir mencari jawaban';
      animClass = 'dodo-anim-think';
    } else if (expression === 'celebrating' || expression === 'excited') {
      imgFile = 'dodo_celebrating.png';
      altText = 'Dodo merayakan keberhasilan dengan gembira';
      animClass = 'dodo-anim-bounce';
    } else if (expression === 'talking') {
      imgFile = 'dodo_welcome.png';
      altText = 'Dodo sedang berbicara memandu permainan';
      animClass = 'dodo-anim-talk';
    } else if (expression === 'curious') {
      imgFile = 'dodo_welcome.png';
      altText = 'Dodo mengajak mencari teman yang butuh bantuan';
      animClass = 'dodo-anim-curious';
    }

    const modifier = typeof sizeClass === 'string' ? `dodo-size-${sizeClass}` : 'dodo-size-panel';

    return `
      <div class="dodo-3d-frame ${modifier} ${animClass}">
        <img
          src="assets/images/${imgFile}"
          alt="${altText}"
          class="dodo-3d-img"
          loading="eager"
        />
      </div>
    `;
  },

  /**
   * Scene 2 Area C: Structured 5-station Playground Grid
   * Order enforced cleanly from left to right:
   * 1. Ayunan (Left)
   * 2. Anak bermain bola (Center-Left)
   * 3. Anak membaca (Center)
   * 4. Bangku & anak butuh bantuan - TARGET (Center-Right)
   * 5. Perosotan (Right)
   */
  getPlaygroundSceneSVG() {
    return `
      <div class="playground-stage-3d">
        <!-- Environment Layer (Z = var(--z-bg)) -->
        <div class="playground-backdrop-layer" aria-hidden="true">
          <img
            src="assets/images/playground_backdrop_3d.png"
            alt=""
            class="playground-backdrop-img"
            loading="eager"
          />
        </div>

        <!-- 5 Non-Overlapping Interactive Character Stations (Z = var(--z-interactive)) -->
        <div class="playground-stations-grid">
          <!-- 1. AREA KIRI: Bermain Ayunan -->
          <button
            type="button"
            class="interactive-zone station-card"
            data-target="aisyah"
            aria-label="Bermain Ayunan di area kiri"
          >
            <div class="station-visual-wrap">
              <img src="assets/images/station_swing.png" alt="Anak bermain ayunan" class="station-3d-img" loading="eager">
            </div>
            <span class="station-label-pill">Bermain Ayunan</span>
          </button>

          <!-- 2. AREA TENGAH-KIRI: Bermain Bola -->
          <button
            type="button"
            class="interactive-zone station-card"
            data-target="rian"
            aria-label="Bermain Bola di area tengah-kiri"
          >
            <div class="station-visual-wrap">
              <img src="assets/images/station_soccer.png" alt="Anak bermain bola" class="station-3d-img" loading="eager">
            </div>
            <span class="station-label-pill">Bermain Bola</span>
          </button>

          <!-- 3. AREA TENGAH: Membaca Buku -->
          <button
            type="button"
            class="interactive-zone station-card"
            data-target="siti"
            aria-label="Membaca Buku di area tengah"
          >
            <div class="station-visual-wrap">
              <img src="assets/images/station_reading.png" alt="Anak membaca buku" class="station-3d-img" loading="eager">
            </div>
            <span class="station-label-pill">Membaca Buku</span>
          </button>

          <!-- 4. AREA TENGAH-KANAN: Kesulitan Mengambil Bola (TARGET) -->
          <button
            type="button"
            class="interactive-zone station-card station-target-boni"
            data-target="boni"
            aria-label="Kesulitan Mengambil Bola di bawah bangku di area tengah-kanan"
          >
            <div class="station-visual-wrap">
              <img src="assets/images/station_boni_bench.png" alt="Anak kesulitan mengambil bola di bawah bangku" class="station-3d-img" loading="eager">
            </div>
            <span class="station-label-pill pill-target">Kesulitan Mengambil Bola</span>
          </button>

          <!-- 5. AREA KANAN: Bermain Perosotan -->
          <button
            type="button"
            class="interactive-zone station-card"
            data-target="doni"
            aria-label="Bermain Perosotan di area kanan"
          >
            <div class="station-visual-wrap">
              <img src="assets/images/station_slide.png" alt="Anak bermain perosotan" class="station-3d-img" loading="eager">
            </div>
            <span class="station-label-pill">Bermain Perosotan</span>
          </button>
        </div>
      </div>
    `;
  },

  /**
   * Scene 3: Boni Bench Close-up visual
   */
  getCloseupSceneSVG() {
    return `
      <div class="closeup-3d-box">
        <img
          src="assets/images/boni_bench_closeup.png"
          alt="Boni kesulitan mengambil bola di bawah bangku taman"
          class="closeup-3d-img"
          loading="eager"
        />
      </div>
    `;
  },

  /**
   * Scene 4: Two children helping each other
   */
  getHelpingSuccessSVG() {
    return `
      <div class="helping-3d-box">
        <img
          src="assets/images/helping_success_scene.png"
          alt="Lina membantu mengembalikan bola kepada Boni dengan senyum bahagia"
          class="helping-3d-img"
          loading="eager"
        />
      </div>
    `;
  },

  /**
   * Scene 4: 3D Gold Medal Badge
   */
  getBadgeSVG() {
    return `
      <div class="medal-3d-award-box">
        <img
          src="assets/images/gold_medal_3d.png"
          alt="Medali Emas 3D Pahlawan Kebaikan"
          class="medal-3d-award-img"
          loading="eager"
        />
        <div class="medal-stars-row" aria-hidden="true">
          <img src="assets/images/star_3d.png" alt="" class="medal-mini-star">
          <img src="assets/images/star_3d.png" alt="" class="medal-mini-star">
          <img src="assets/images/star_3d.png" alt="" class="medal-mini-star">
        </div>
      </div>
    `;
  }
};

window.Visuals = Visuals;
