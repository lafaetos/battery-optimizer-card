class BatteryOptimizerCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this.content) {
      this.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 8px;">
          <div class="field">
            <label style="display: block; margin-bottom: 4px; font-weight: 500;">Заголовок / Title:</label>
            <input type="text" id="title" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
          </div>

          <div class="field" style="display: flex; gap: 10px;">
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Мова / Language:</label>
              <select id="language" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
                <option value="auto">Авто (за мовою HA)</option>
                <option value="uk">Українська</option>
                <option value="en">English</option>
              </select>
            </div>
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Орієнтація / Layout:</label>
              <select id="layout" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
                <option value="horizontal">Горизонтальна (Horizontal)</option>
                <option value="vertical">Вертикальна (Vertical)</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label style="display: block; margin-bottom: 4px; font-weight: 500;">Режим порівняння / Comparison Mode:</label>
            <select id="compare_mode" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
              <option value="split">Окремо / Паралельно (Split)</option>
              <option value="overlay">Накладання / Прозорість (Overlay)</option>
            </select>
          </div>
          
          <div class="field">
            <label style="display: block; margin-bottom: 4px; font-weight: 500;">Профіль робочих днів / Workday Profile:</label>
            <ha-entity-picker id="entity_workday" .hass="${this._hass}"></ha-entity-picker>
          </div>

          <div class="field">
            <label style="display: block; margin-bottom: 4px; font-weight: 500;">Профіль вихідних / Weekend Profile:</label>
            <ha-entity-picker id="entity_weekend" .hass="${this._hass}"></ha-entity-picker>
          </div>

          <div class="field">
            <label style="display: block; margin-bottom: 4px; font-weight: 500;">Реальний лічильник (kWh) / Real Energy Sensor:</label>
            <ha-entity-picker id="sensor_real" .hass="${this._hass}"></ha-entity-picker>
          </div>

          <div class="field" style="display: flex; gap: 10px;">
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Колір прогнозу / Bar Color:</label>
              <input type="color" id="bar_color" style="width: 100%; height: 36px; border: none; cursor: pointer; background: transparent;">
            </div>
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Колір реального / Real Color:</label>
              <input type="color" id="real_color" style="width: 100%; height: 36px; border: none; cursor: pointer; background: transparent;">
            </div>
          </div>

          <div class="field" style="display: flex; gap: 10px;">
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Прозорість прогнозу (0-1) / Bar Opacity:</label>
              <input type="number" id="bar_opacity" min="0" max="1" step="0.05" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
            </div>
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Прозорість реального (0-1) / Real Opacity:</label>
              <input type="number" id="real_opacity" min="0" max="1" step="0.05" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
            </div>
          </div>

          <div class="field" style="display: flex; gap: 10px;">
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Колір акценту / Accent Color:</label>
              <input type="color" id="current_color" style="width: 100%; height: 36px; border: none; cursor: pointer; background: transparent;">
            </div>
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Розмір шрифту / Font Size:</label>
              <input type="text" id="font_size" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
            </div>
          </div>

          <div class="field" style="display: flex; gap: 10px;">
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Висота бару / Bar Size:</label>
              <input type="text" id="bar_height" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
            </div>
            <div style="flex: 1;">
              <label style="display: block; margin-bottom: 4px; font-weight: 500;">Відступ / Gap:</label>
              <input type="text" id="row_gap" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
            </div>
          </div>
        </div>
      `;
      this.content = true;

      this.querySelectorAll('input, select').forEach(element => {
        element.addEventListener('input', (e) => this._valueChanged(e));
        element.addEventListener('change', (e) => this._valueChanged(e));
      });

      this.querySelectorAll('ha-entity-picker').forEach(picker => {
        picker.addEventListener('value-changed', (e) => this._entityChanged(e));
      });
    }

    if (this._config) {
      this.querySelector('#title').value = this._config.title || '';
      this.querySelector('#language').value = this._config.language || 'auto';
      this.querySelector('#layout').value = this._config.layout || 'horizontal';
      this.querySelector('#compare_mode').value = this._config.compare_mode || 'split';
      this.querySelector('#entity_workday').value = this._config.entity_workday || '';
      this.querySelector('#entity_weekend').value = this._config.entity_weekend || '';
      this.querySelector('#sensor_real').value = this._config.sensor_real || '';
      this.querySelector('#bar_color').value = this._config.bar_color || '#3498db';
      this.querySelector('#real_color').value = this._config.real_color || '#2ecc71';
      this.querySelector('#bar_opacity').value = this._config.bar_opacity !== undefined ? this._config.bar_opacity : 0.4;
      this.querySelector('#real_opacity').value = this._config.real_opacity !== undefined ? this._config.real_opacity : 0.85;
      this.querySelector('#current_color').value = this._config.current_color || '#f39c12';
      this.querySelector('#font_size').value = this._config.font_size || '14px';
      this.querySelector('#bar_height').value = this._config.bar_height || '16px';
      this.querySelector('#row_gap').value = this._config.row_gap || '6px';
      
      this.querySelector('#entity_workday').hass = this._hass;
      this.querySelector('#entity_weekend').hass = this._hass;
      this.querySelector('#sensor_real').hass = this._hass;
    }
  }

  _entityChanged(ev) {
    if (!this._config || !this._hass) return;
    const target = ev.target;
    const field = target.id;
    const value = ev.detail.value;

    this._config = {
      ...this._config,
      [field]: value,
    };

    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }

  _valueChanged(ev) {
    if (!this._config || !this._hass) return;
    const target = ev.target;
    const field = target.id;
    const value = target.type === 'number' ? parseFloat(target.value) : target.value;

    this._config = {
      ...this._config,
      [field]: value,
    };

    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }
}

customElements.define('battery-optimizer-card-editor', BatteryOptimizerCardEditor);

class BatteryOptimizerCard extends HTMLElement {
  constructor() {
    super();
    const day = new Date().getDay();
    this._activeTab = (day === 0 || day === 6) ? 'weekend' : 'workday';
    this._realHourlyData = {};
    this._lastFetchedDate = '';
  }

  static getConfigElement() {
    return document.createElement('battery-optimizer-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'Профіль споживання за годинами',
      language: 'auto',
      layout: 'horizontal',
      compare_mode: 'split',
      entity_workday: 'sensor.workday_hourly_consumption_profile',
      entity_weekend: 'sensor.weekend_hourly_consumption_profile',
      sensor_real: '',
      bar_color: '#3498db',
      real_color: '#2ecc71',
      bar_opacity: 0.4,
      real_opacity: 0.85,
      current_color: '#f39c12',
      font_size: '14px',
      bar_height: '16px',
      row_gap: '6px'
    };
  }

  setConfig(config) {
    this._config = config;
  }

  set hass(hass) {
    if (!this.content) {
      this.innerHTML = `
        <ha-card>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px 16px 8px 16px;">
            <div id="header" style="font-size: 16px; font-weight: 500;"></div>
            <div style="display: flex; background: rgba(150,150,150,0.1); border-radius: 6px; padding: 2px;">
              <button id="tab_workday" style="border: none; background: transparent; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 500;"></button>
              <button id="tab_weekend" style="border: none; background: transparent; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 500;"></button>
            </div>
          </div>
          <div id="content" style="padding: 0 16px 16px 16px;"></div>
        </ha-card>
      `;
      this.headerEl = this.querySelector('#header');
      this.content = this.querySelector('#content');
      
      this.querySelector('#tab_workday').addEventListener('click', () => {
        this._activeTab = 'workday';
        this._updateContent(hass);
      });
      this.querySelector('#tab_weekend').addEventListener('click', () => {
        this._activeTab = 'weekend';
        this._updateContent(hass);
      });
    }

    this._hass = hass;
    this._updateContent(hass);
    
    if (this._config && this._config.sensor_real) {
      this._fetchHistoryIfNeeded(hass);
    }
  }

  async _fetchHistoryIfNeeded(hass) {
    const todayStr = new Date().toISOString().split('T')[0];
    const entityId = this._config.sensor_real;
    
    if (this._lastFetchedDate === todayStr && this._lastEntity === entityId) return;

    try {
      const startTime = `${todayStr}T00:00:00.000Z`;
      const history = await hass.callApi('GET', `history/period/${startTime}?filter_entity_id=${entityId}`);
      
      if (history && history[0] && history[0].length > 0) {
        this._processHistoryData(history[0]);
        this._lastFetchedDate = todayStr;
        this._lastEntity = entityId;
        this._updateContent(hass);
      }
    } catch (e) {
      console.error('Battery Optimizer Card: Помилка завантаження історії', e);
    }
  }

  _processHistoryData(states) {
    const hourly = {};
    for (let i = 0; i < 24; i++) {
      hourly[String(i).padStart(2, '0')] = 0;
    }

    const points = [];
    states.forEach(item => {
      const val = parseFloat(item.state);
      if (!isNaN(val)) {
        points.push({
          time: new Date(item.last_updated),
          val: val
        });
      }
    });

    if (points.length === 0) return;

    points.sort((a, b) => a.time - b.time);

    const getValueAtHour = (targetHour) => {
      const targetTime = new Date(points[0].time);
      targetTime.setHours(targetHour, 0, 0, 0);

      let closest = points[0];
      let minDiff = Math.abs(points[0].time - targetTime);

      for (let p of points) {
        let diff = Math.abs(p.time - targetTime);
        if (diff <= minDiff) {
          minDiff = diff;
          closest = p;
        }
      }
      if (minDiff > 90 * 60 * 1000) return null;
      return closest.val;
    };

    for (let i = 0; i < 24; i++) {
      const hourStr = String(i).padStart(2, '0');
      
      const startVal = getValueAtHour(i);
      const endVal = getValueAtHour(i + 1);

      if (startVal !== null && endVal !== null) {
        const diff = endVal - startVal;
        if (diff >= 0 && diff < 20) {
          hourly[hourStr] = parseFloat(diff.toFixed(3));
        }
      }
    }

    this._realHourlyData = hourly;
  }

  _updateContent(hass) {
    if (!this._config) return;

    let lang = this._config.language || 'auto';
    if (lang === 'auto') {
      lang = (hass.locale && hass.locale.language) ? hass.locale.language.substring(0, 2) : 'uk';
      if (lang !== 'uk' && lang !== 'en') lang = 'uk';
    }

    const i18n = {
      uk: { workday: 'Робочі', weekend: 'Вихідні', defaultTitle: 'Профіль споживання за годинами', notFound: 'Сутність не знайдена: ' },
      en: { workday: 'Workdays', weekend: 'Weekends', defaultTitle: 'Hourly Consumption Profile', notFound: 'Entity not found: ' }
    };

    const t = i18n[lang] || i18n['uk'];

    this.querySelector('#tab_workday').innerText = t.workday;
    this.querySelector('#tab_weekend').innerText = t.weekend;

    const entityId = this._activeTab === 'workday' ? this._config.entity_workday : this._config.entity_weekend;
    const stateObj = hass.states[entityId];

    const btnWd = this.querySelector('#tab_workday');
    const btnWe = this.querySelector('#tab_weekend');
    const activeColor = this._config.current_color || '#f39c12';

    if (this._activeTab === 'workday') {
      btnWd.style.background = 'var(--card-background-color)';
      btnWd.style.color = activeColor;
      btnWd.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      btnWe.style.background = 'transparent';
      btnWe.style.color = 'var(--secondary-text-color)';
      btnWe.style.boxShadow = 'none';
    } else {
      btnWe.style.background = 'var(--card-background-color)';
      btnWe.style.color = activeColor;
      btnWe.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      btnWd.style.background = 'transparent';
      btnWd.style.color = 'var(--secondary-text-color)';
      btnWd.style.boxShadow = 'none';
    }

    this.headerEl.innerHTML = this._config.title || t.defaultTitle;

    if (!stateObj) {
      this.content.innerHTML = `<p style="color: var(--error-color);">${t.notFound}${entityId || 'not specified'}</p>`;
      return;
    }

    const barColor = this._config.bar_color || '#3498db';
    const realColor = this._config.real_color || '#2ecc71';
    const barOpacity = this._config.bar_opacity !== undefined ? this._config.bar_opacity : 0.4;
    const realOpacity = this._config.real_opacity !== undefined ? this._config.real_opacity : 0.85;
    const accentColor = this._config.current_color || '#f39c12';
    const fontSize = this._config.font_size || '14px';
    const barSize = this._config.bar_height || '16px';
    const gapSize = this._config.row_gap || '6px';
    const layout = this._config.layout || 'horizontal';
    const compareMode = this._config.compare_mode || 'split';
    const hasReal = Boolean(this._config.sensor_real);

    const nowHour = new Date().getHours();
    
    // ГЛОБАЛЬНИЙ МАКСИМУМ СЕРЕД УСІХ ЗНАЧЕНЬ (прогноз + реальність)
    let maxVal = 0.001;
    for (let i = 0; i < 24; i++) {
      let hourStr = String(i).padStart(2, '0');
      let val = parseFloat(stateObj.attributes[`hour_${hourStr}`] || 0);
      if (val > maxVal) maxVal = val;

      if (hasReal) {
        let rVal = this._realHourlyData[hourStr] || 0;
        if (rVal > maxVal) maxVal = rVal;
      }
    }

    let html = '';

    if (layout === 'vertical') {
      html = `<div style="display: flex; align-items: flex-end; height: 240px; gap: ${gapSize}; overflow-x: auto; padding-top: 15px; padding-bottom: 5px;">`;
      
      for (let i = 0; i < 24; i++) {
        const hourStr = String(i).padStart(2, '0');
        const val = parseFloat(stateObj.attributes[`hour_${hourStr}`] || 0);
        const pct = Math.min((val / maxVal) * 100, 100);

        let realVal = hasReal ? (this._realHourlyData[hourStr] || 0) : 0;
        let realPct = hasReal ? Math.min((realVal / maxVal) * 100, 100) : 0;

        const isCurrent = (i === nowHour);
        const currentBorder = isCurrent ? `border: 1px solid ${accentColor}; background: rgba(243, 156, 18, 0.12);` : '';
        const textColor = isCurrent ? `color: ${accentColor}; font-weight: bold;` : 'color: var(--secondary-text-color);';

        if (hasReal && compareMode === 'overlay') {
          html += `
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; min-width: 24px;">
              <div style="font-size: 8px; font-family: monospace; margin-bottom: 2px; ${textColor}">${realVal > 0 ? realVal.toFixed(1) : ''}</div>
              <div style="width: 100%; height: ${barSize}; flex-grow: 1; background: rgba(150, 150, 150, 0.15); border-radius: 6px; display: flex; align-items: flex-end; overflow: hidden; position: relative; ${currentBorder}">
                <div style="width: 100%; height: ${pct}%; background: ${barColor}; position: absolute; bottom: 0; border-radius: 6px 6px 0 0; opacity: ${barOpacity};" title="Прогноз: ${val.toFixed(2)}"></div>
                <div style="width: 100%; height: ${realPct}%; background: ${realColor}; position: absolute; bottom: 0; border-radius: 6px 6px 0 0; opacity: ${realOpacity};" title="Реально: ${realVal.toFixed(2)}"></div>
              </div>
              <div style="font-size: 10px; margin-top: 6px; ${textColor}">${hourStr}</div>
            </div>
          `;
        } else if (hasReal && compareMode === 'split') {
          html += `
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; min-width: 26px;">
              <div style="font-size: 8px; font-family: monospace; margin-bottom: 2px; ${textColor}">${realVal > 0 ? realVal.toFixed(1) : ''}</div>
              <div style="width: 100%; height: ${barSize}; flex-grow: 1; background: rgba(150, 150, 150, 0.15); border-radius: 6px; display: flex; align-items: flex-end; gap: 2px; padding: 0 2px; overflow: hidden; position: relative; ${currentBorder}">
                <div style="flex: 1; height: ${pct}%; background: ${barColor}; opacity: ${barOpacity}; border-radius: 3px 3px 0 0;" title="Прогноз: ${val.toFixed(2)}"></div>
                <div style="flex: 1; height: ${realPct}%; background: ${realColor}; opacity: ${realOpacity}; border-radius: 3px 3px 0 0;" title="Реально: ${realVal.toFixed(2)}"></div>
              </div>
              <div style="font-size: 10px; margin-top: 6px; ${textColor}">${hourStr}</div>
            </div>
          `;
        } else {
          html += `
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; min-width: 24px;">
              <div style="font-size: 8px; font-family: monospace; margin-bottom: 2px; ${textColor}">${val > 0 ? val.toFixed(1) : ''}</div>
              <div style="width: 100%; height: ${barSize}; flex-grow: 1; background: rgba(150, 150, 150, 0.15); border-radius: 6px; display: flex; align-items: flex-end; overflow: hidden; position: relative; ${currentBorder}">
                <div style="width: 100%; height: ${pct}%; background: ${barColor}; opacity: ${barOpacity}; border-radius: 6px 6px 0 0;"></div>
              </div>
              <div style="font-size: 10px; margin-top: 6px; ${textColor}">${hourStr}</div>
            </div>
          `;
        }
      }
      html += `</div>`;

    } else {
      this.content.style.display = 'flex';
      this.content.style.flexDirection = 'column';
      this.content.style.gap = gapSize;

      for (let i = 0; i < 24; i++) {
        const hourStr = String(i).padStart(2, '0');
        const val = parseFloat(stateObj.attributes[`hour_${hourStr}`] || 0);
        const pct = Math.min((val / maxVal) * 100, 100);

        let realVal = hasReal ? (this._realHourlyData[hourStr] || 0) : 0;
        let realPct = hasReal ? Math.min((realVal / maxVal) * 100, 100) : 0;

        const isCurrent = (i === nowHour);
        const bgStyle = isCurrent ? `background: rgba(243, 156, 18, 0.12); border: 1px solid ${accentColor};` : '';
        const textWeight = isCurrent ? `font-weight: bold; color: ${accentColor};` : 'color: var(--secondary-text-color);';

        if (hasReal && compareMode === 'overlay') {
          html += `
            <div style="display: flex; align-items: center; font-size: ${fontSize}; padding: 4px 8px; border-radius: 8px; ${bgStyle}">
              <div style="width: 50px; ${textWeight}">${hourStr}:00</div>
              <div style="flex-grow: 1; background: rgba(150, 150, 150, 0.15); height: ${barSize}; border-radius: 8px; margin: 0 10px; overflow: hidden; position: relative;">
                <div style="width: ${pct}%; background: ${barColor}; height: 100%; position: absolute; left: 0; top: 0; border-radius: 8px; opacity: ${barOpacity};" title="Прогноз: ${val.toFixed(2)}"></div>
                <div style="width: ${realPct}%; background: ${realColor}; height: 100%; position: absolute; left: 0; top: 0; border-radius: 8px; opacity: ${realOpacity};" title="Реально: ${realVal.toFixed(2)}"></div>
              </div>
              <div style="width: 65px; text-align: right; font-family: monospace; font-size: ${fontSize};">
                <div>${val.toFixed(2)}</div>
                <div style="font-size: 0.85em; color: ${realColor};">${realVal.toFixed(2)}</div>
              </div>
            </div>
          `;
        } else if (hasReal && compareMode === 'split') {
          html += `
            <div style="display: flex; align-items: center; font-size: ${fontSize}; padding: 4px 8px; border-radius: 8px; ${bgStyle}">
              <div style="width: 50px; ${textWeight}">${hourStr}:00</div>
              <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 2px; margin: 0 10px;">
                <div style="background: rgba(150, 150, 150, 0.15); height: calc(${barSize} / 2); border-radius: 4px; overflow: hidden; position: relative;">
                  <div style="width: ${pct}%; background: ${barColor}; opacity: ${barOpacity}; height: 100%; border-radius: 4px;" title="Прогноз: ${val.toFixed(2)}"></div>
                </div>
                <div style="background: rgba(150, 150, 150, 0.15); height: calc(${barSize} / 2); border-radius: 4px; overflow: hidden; position: relative;">
                  <div style="width: ${realPct}%; background: ${realColor}; opacity: ${realOpacity}; height: 100%; border-radius: 4px;" title="Реально: ${realVal.toFixed(2)}"></div>
                </div>
              </div>
              <div style="width: 65px; text-align: right; font-family: monospace; font-size: ${fontSize};">
                <div>${val.toFixed(2)}</div>
                <div style="font-size: 0.85em; color: ${realColor};">${realVal.toFixed(2)}</div>
              </div>
            </div>
          `;
        } else {
          html += `
            <div style="display: flex; align-items: center; font-size: ${fontSize}; padding: 4px 8px; border-radius: 8px; ${bgStyle}">
              <div style="width: 55px; ${textWeight}">${hourStr}:00</div>
              <div style="flex-grow: 1; background: rgba(150, 150, 150, 0.15); height: ${barSize}; border-radius: 8px; margin: 0 12px; overflow: hidden; position: relative;">
                <div style="width: ${pct}%; background: ${barColor}; opacity: ${barOpacity}; height: 100%; border-radius: 8px;"></div>
              </div>
              <div style="width: 65px; text-align: right; font-family: monospace; font-size: ${fontSize};">${val.toFixed(2)} кВт</div>
            </div>
          `;
        }
      }
    }

    this.content.innerHTML = html;
  }

  getCardSize() {
    return 25;
  }
}

customElements.define('battery-optimizer-card', BatteryOptimizerCard);

// Реєстрація картки в меню вибору (Card Picker)
window.customCards = window.customCards || [];
window.customCards.push({
  type: "battery-optimizer-card",
  name: "Battery Optimizer Card",
  description: "Картка для відображення прогнозу споживання та порівняння з реальним лічильником.",
  preview: true,
});
