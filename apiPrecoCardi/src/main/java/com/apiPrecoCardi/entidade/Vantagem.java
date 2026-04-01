package com.apiPrecoCardi.entidade;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_lista_vantagem")
public class Vantagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "pacote_incluso")
	private String pacoteIncluso;

	public Vantagem() {
		super();
	}

	public Vantagem(Long id, String pacoteIncluso) {
		super();
		this.id = id;
		this.pacoteIncluso = pacoteIncluso;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPacoteIncluso() {
		return pacoteIncluso;
	}

	public void setPacoteIncluso(String pacoteIncluso) {
		this.pacoteIncluso = pacoteIncluso;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Vantagem other = (Vantagem) obj;
		return Objects.equals(id, other.id);
	}

}
